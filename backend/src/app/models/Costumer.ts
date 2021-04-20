import { Entity, PrimaryGeneratedColumn, Column, getRepository, Repository, DeepPartial } from 'typeorm';
import { StatusType } from './../types';

let repository: Repository<Costumer>;

interface CostumerInterface {
    name: string,
    phone: string,
    birth_date: string,
    status: StatusType
}
@Entity('costumers')
class Costumer {

    @PrimaryGeneratedColumn()
    id: number;
    //generationStrategy: 'increment'

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    birth_date: string;

    @Column({
        type: "enum",
        enum: [0, 1],
        default: 1
    })
    status: StatusType;

    /* ------------------- Methods ----------------------- */
    static async list(id = '0') {
        const repository = getRepository(Costumer);

        if(id !== '0' && id !== undefined) {
            /* ------------- List By Id ------------- */
            return await repository.createQueryBuilder("costumers") 
            .where("id = :id", { id })
            .getOne();
        }

        /* ------------- List All ------------- */
        //return await repository.find();
        return await repository.createQueryBuilder("costumers") //https://typeorm.io/#/select-query-builder/how-to-create-and-use-a-querybuilder
            .select([
                "id",
                "name",
                "phone",
                "birth_date",
                "status",
                "created_at"
            ])
            .getRawMany();
    }

    static async findByName(name: string) {
        const repository = getRepository(Costumer);

        return await repository.createQueryBuilder("costumers")
            .where("LOWER(name) = LOWER(:name)", { name })
            .getOne();
    }

    static async insert(costumer: CostumerInterface) {
        repository = getRepository(Costumer);

        await repository.save(costumer); // save on Database

        const auxCostumer = repository.create(costumer); // save on Database
        return await repository.save(auxCostumer);
    }

    static async update(id: string, costumer: object) {
        repository = getRepository(Costumer);

        repository.createQueryBuilder("costumers")
            .update(Costumer)
            .set(costumer)
            .where("id = :id", { id })
            .execute();
    }

    static async delete(id: string) {
        repository = getRepository(Costumer);

        return await repository.delete(id)
    }
}

export default Costumer;