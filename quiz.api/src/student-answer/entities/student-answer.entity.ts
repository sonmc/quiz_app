import { Answer } from 'src/answer/entities/answer.entity';
import { Student } from "src/student/entities/student.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StudentAnswer {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Student)
    student: Student

    @ManyToOne(() => Answer)
    answer: Answer

}
