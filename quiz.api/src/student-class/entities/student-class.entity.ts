import { Classes } from './../../class/entities/class.entity';
import { Student } from './../../student/entities/student.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StudentClass {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Student)
    student: Student;

    @ManyToOne(() => Classes)
    class: number;



}
