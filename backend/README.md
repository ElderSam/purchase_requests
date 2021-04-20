# Backend

## Initialization 🚀

## 1️⃣ Install dependencies
$ yarn

## 2️⃣ Configure Database and the `ormconfig.json`
create a database in Postgres and udpate the <code>`ormconfig.ts`</code> file if necessary

## 3️⃣ Run Migrations (Create tables)
$ yarn typeorm migration:run

## 4️⃣ Start the Server
$ yarn dev
----------------

## API Rotes
host: http://localhost:3333

You can use the Insomnia to see the routes.
Open Insomnia, and import the file in `/api_documentation` folder

Costumers;
    Create /costumers (POST)

    List: /costumers (GET)

------------------
## Download PostgreSQL
https://www.postgresql.org/download/

## TypeORM
Documentation: https://typeorm.io/#/

como criar migrations:
$ yarn typeorm migration:create -n <MIGRATION_NAME> //example of migration name: CreateCostumersTable

Executar Migrations:
$ yarn typeorm migration:run

Veja Mais: https://typeorm.io/#/migrations/creating-a-new-migration

------------------
## Tools and Libraries used:
**body-parser**
Parses the client's request from JSON into Javascript objects

**ts-node**
Automatically restarts the server when we change any file

**PostgreSQL**
Relational Database Manager
Download PostgreSQL: https://www.postgresql.org/download/
To start the server manually when has Connection Error: 
    In Windows, press win + R and open services.msc
    find postgreSQL service and click right buttom and start

**TypeORM**
To manipulate database
Documentation: https://typeorm.io/#/

    how to create migrations:
    $ yarn typeorm migration:create -n <MIGRATION_NAME> //example of migration name: CreateCostumersTable

    Run Migrations:
    $ yarn typeorm migration:run

**reflect-metadata**
allow some annotations features used with TypeORM
