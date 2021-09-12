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

    // Give the user some info
    const spinner = spin('Generating...')
    spinner.start()

    // Get the tables
    const tables = await Meta.tables.list()

    // Generate a model for every database table
    if (tables.data) {
      const promises = tables?.data?.map(async (table) => {
        generate({
          template: '/watermelon/model.ejs',
          target: `./database/models/${table.name}.ts`,
          props: {
            name: table.name,
          },
        })
      })

      await Promise.all(promises).catch((error) => {
        spinner.fail(`Error writing tables: ${error.message}`)
      })
    }

    // Generate the database index
    await generate({
      template: '/watermelon/database.ejs',
      target: `./database/database.ts`,
      props: {
        tables: tables.data,
      },
    }).catch((error) => {
      spinner.fail(`Error writing database: ${error.message}`)
    })

    // Finished
    spinner.succeed('Finished.')
    fancy(highlight(`Check "./database"`))
  },
}
