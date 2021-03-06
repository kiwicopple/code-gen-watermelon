# Watermelon code generator

An experimental generator to produce [WatermelonDB](https://nozbe.github.io/WatermelonDB/index.html) database from Postgres.

## Usage

Install the dependencies:

`npm install`

Start a mock database:

`docker-compose up`

Run the generator:

`npm run dev watermelon`

## How it works

1. Uses postgres-meta to introspect the schema (see `./src/commands/watermelon.js`)
2. Grabs all the tables
3. For each table, generates a Watermelon model
4. Dumps the whole database schema into [./database](./database)

## Todo

- [ ] Transform snake_case to PascalCase for the ModelNames
- [ ] Transform pluralized models to singular