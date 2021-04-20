import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProductsTable1618941848510 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE products
            (
                id SERIAL PRIMARY KEY,
                name character varying(20) UNIQUE NOT NULL,
                value numeric NOT NULL,
                status smallint DEFAULT 1,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }

}
