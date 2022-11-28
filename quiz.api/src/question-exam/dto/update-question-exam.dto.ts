import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionExamDto } from './create-question-exam.dto';

export class UpdateQuestionExamDto extends PartialType(CreateQuestionExamDto) {}
