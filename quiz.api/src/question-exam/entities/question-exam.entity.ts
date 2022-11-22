import { Exam } from './../../exam/entities/exam.entity';
import { Question } from './../../question/entities/question.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class QuestionExam {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Question)
    question: Question
    @ManyToOne(() => Exam)
    exam: Exam

}
