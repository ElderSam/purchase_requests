/*
    Criar uma migration: https://typeorm.io/#/migrations/using-migration-api-to-write-migrations
*/

import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCostumersTable1618881573452 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS costumers
            (
                id SERIAL PRIMARY KEY,
                name character varying(50) UNIQUE NOT NULL,
                phone character varying(11) NOT NULL,
                birth_date date NOT NULL,
                status smallint DEFAULT 1,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('costumers');
    }

}
