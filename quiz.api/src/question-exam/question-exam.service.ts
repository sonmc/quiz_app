import { Injectable } from '@nestjs/common';
import { CreateQuestionExamDto } from './dto/create-question-exam.dto';
import { UpdateQuestionExamDto } from './dto/update-question-exam.dto';

@Injectable()
export class QuestionExamService {
  create(createQuestionExamDto: CreateQuestionExamDto) {
    return 'This action adds a new questionExam';
  }

  findAll() {
    return `This action returns all questionExam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} questionExam`;
  }

  update(id: number, updateQuestionExamDto: UpdateQuestionExamDto) {
    return `This action updates a #${id} questionExam`;
  }

  remove(id: number) {
    return `This action removes a #${id} questionExam`;
  }
}
