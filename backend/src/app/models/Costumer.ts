import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('costumers')
class Costumer {

    //@PrimaryGeneratedColumn('uuid')
    //id: 'uuid';
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    birth_date: string;

    @Column()
    status: number;
}

export default Costumer;