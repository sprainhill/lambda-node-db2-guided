# Table Schema Design

Migrations are git for your database schemas

Migrations keep the database design in sync with the application code

Every change to db schema must be recorded in a migration file

## Migrations

Install the `knex cli`: `npm install -g knex` or `yarn global add knex`

Create a knex configuration file (knexfile.js). Type: `knex init`

Update to teach knex how to connect to database

To create a migration type: `knex migrate:make migration-name`

To run a migration type: `knex migrate:latest`

Can run them one at a time as `knex migrate:up` `knex migrate:down`