import { GluegunToolbox } from 'gluegun'
import { PostgresMeta } from '@supabase/postgres-meta'

// In prod: use pgbouncer
// or connect directly to Postgres Meta as an API
const poolConfig = {
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'postgres',
}

const Meta = new PostgresMeta(poolConfig)

export default {
  name: 'watermelon',
  run: async ({
    template: { generate },
    print: {
      colors: { highlight },
      spin,
      fancy,
    },
  }: GluegunToolbox) => {
    const spinner = spin('Generating...')
    try {
      spinner.start()

      // Get the tables
      const tables = await Meta.tables.list()

      // Generate a model for every database table
      if (tables.data) {
        const promises = tables?.data?.map(async (table) => {
          await generate({
            template: '/watermelon/model.ejs',
            target: `./database/models/${table.name}.ts`,
            props: {
              name: table.name,
            },
          }).catch((error) => {
            error(error.message)
          })
        })
        await Promise.all(promises)
      }

      // Finished
      spinner.succeed('Finished.')
      fancy(highlight(`Check "./database"`))
    } catch (error: any) {
      spinner.fail(`Error writing Docker setup files: ${error.message}`)
      error(error.message)
    }
  },
}
