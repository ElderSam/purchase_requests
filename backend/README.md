# Backend
## 1. Instalar dependências
``$ yarn install``

## 2. Start Server:
``$ yarn dev``
----------------

Adicionando Typescript;
``$ yarn add typescript ts-node @types/express -D`` // instala dependências de desenvolvimento
``$ npx typescript --init ``//cria arquivo de configurações do TypeScript 

------------------
## Download PostgreSQL
https://www.postgresql.org/download/


como criar migrations:
$ yarn typeorm migration:create -n <MIGRATION_NAME> //example of migration name: CreateCostumersTable
