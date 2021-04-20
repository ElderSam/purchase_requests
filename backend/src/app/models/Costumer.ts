import { Entity, PrimaryGeneratedColumn, Column, getRepository, Repository } from 'typeorm';
import { StatusType } from './../types';

let repository: Repository<Costumer>;

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
    static async list() {
        const repository = getRepository(Costumer);

        return await repository.find();
        /*return await repository.createQueryBuilder("costumers")
            .select([
                "id",
                "name",
                "phone",
                "birth_date",
                "status"
            ])
            .getRawMany();*/
    }
}

export default Costumer;