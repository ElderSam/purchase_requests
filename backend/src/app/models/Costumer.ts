import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { StatusType } from './../types';
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
}

export default Costumer;