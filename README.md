# Watermelon code generator

An experimental generator to produce watermelon.js database from Postgres.

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

## Todo

- [ ] Transform snake_case to PascalCase for the ModelNames
- [ ] Transform pluralized tables to singular