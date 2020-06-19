# CRUD Users app (Server + Client)

DEMO - <https://app-killprime.herokuapp.com/>.

This full application CRUD Users

API settings URL and application names are in `src/settings.js` file.

Screenshot home page app:

![](http://getprojects.ru/pics/crud-home.png)

## Setup

`$ npm install`

## Postgres

Connection settings in the file - `.env`


	DATABASE_URL = postgres://login:password@localhost/database_name
	DATABASE_TEST_URL = postgres://login:password@localhost/database_name_test


## Run migrations

`$ knex migrate:latest`


## Run seeds

`$ knex seed:run`

## Build app

`$ npm run build`

## Run app

`$ npm start`

## ERD

![](https://app.lucidchart.com/publicSegments/view/e59d6311-9540-4458-8f0e-030fbc6af25e/image.png)
