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

Adicionando Typescript;
``$ yarn add typescript ts-node @types/express -D`` // instala dependências de desenvolvimento
``$ npx typescript --init ``//cria arquivo de configurações do TypeScript 

------------------
## Download PostgreSQL
https://www.postgresql.org/download/


como criar migrations:
$ yarn typeorm migration:create -n <MIGRATION_NAME> //example of migration name: CreateCostumersTable

Executar Migrations:
$ yarn typeorm migration:run

Veja Mais: https://typeorm.io/#/migrations/creating-a-new-migration
