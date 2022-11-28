import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullname: string

    @Column()
    age: number

    @Column()
    dob: number

    @Column()
    address: string
}
