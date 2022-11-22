import { Category } from './../../category/entities/category.entity';
import { Answer } from "src/answer/entities/answer.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Question {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Answer, (answer) => answer.question)
    answers: Answer[]

    @ManyToOne(() => Category, (ca) => ca.questions)
    category: Category
}
