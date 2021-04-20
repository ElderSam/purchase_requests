import { Entity, PrimaryGeneratedColumn, Column, getRepository, Repository, DeepPartial } from 'typeorm';
import { StatusType } from '../types';

let repository: Repository<Product>;

interface ProductInterface {
    name: string,
    value: string,
    status: StatusType
}

@Entity('products')
class Product {

    @PrimaryGeneratedColumn()
    id: number;
    //generationStrategy: 'increment'

    @Column()
    name: string;

    @Column()
    value: string;

    @Column({
        type: "enum",
        enum: [0, 1],
        default: 1
    })
    status: StatusType;

    /* ------------------- Methods ----------------------- */
    static async list(id = '0') {
        const repository = getRepository(Product);

        if(id !== '0' && id !== undefined) {
            /* ------------- List By Id ------------- */
            return await repository.createQueryBuilder("products") 
            .where("id = :id", { id })
            .getOne();
        }

        /* ------------- List All ------------- */
        //return await repository.find();
        return await repository.createQueryBuilder("products") //https://typeorm.io/#/select-query-builder/how-to-create-and-use-a-querybuilder
            .select([
                "id",
                "name",
                "value",
                "status",
                "created_at"
            ])
            .getRawMany();
    }

    static async findByName(name: string) {
        const repository = getRepository(Product);

        return await repository.createQueryBuilder("products")
            .where("LOWER(name) = LOWER(:name)", { name })
            .getOne();
    }

    static async insert(product: ProductInterface) {
        repository = getRepository(Product);

        await repository.save(product); // save on Database

        const auxProduct = repository.create(product); // save on Database
        return await repository.save(auxProduct);
    }

    static async update(id: string, product: object) {

        repository = getRepository(Product);

        repository.createQueryBuilder("products")
            .update(Product)
            .set(product)
            .where("id = :id", { id })
            .execute();
    }

    static async delete(id: string) {
        repository = getRepository(Product);

        return await repository.delete(id)
    }
}

export default Product;