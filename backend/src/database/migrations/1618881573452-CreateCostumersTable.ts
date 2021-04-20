/*
    Criar uma migration: https://typeorm.io/#/migrations/using-migration-api-to-write-migrations
*/

import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCostumersTable1618881573452 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS costumers
            (
                id integer NOT NULL,
                name character varying(50) NOT NULL,
                phone character varying(11) NOT NULL,
                birth_date date NOT NULL,
                status smallint,
                PRIMARY KEY (id)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('costumers');
    }

}
