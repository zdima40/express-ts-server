import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

}