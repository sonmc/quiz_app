import { Module } from '@nestjs/common';
import { QuestionExamService } from './question-exam.service';
import { QuestionExamController } from './question-exam.controller';

@Module({
  controllers: [QuestionExamController],
  providers: [QuestionExamService]
})
export class QuestionExamModule {}
