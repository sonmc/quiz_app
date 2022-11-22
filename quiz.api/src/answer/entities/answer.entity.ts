import { Question } from "src/question/entities/question.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Answer {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string

    @Column()
    isCorrect: boolean

    @ManyToOne(() => Question, (question) => question.answers)
    question: Question
}
