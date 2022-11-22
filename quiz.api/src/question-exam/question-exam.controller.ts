import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionExamService } from './question-exam.service';
import { CreateQuestionExamDto } from './dto/create-question-exam.dto';
import { UpdateQuestionExamDto } from './dto/update-question-exam.dto';

@Controller('question-exam')
export class QuestionExamController {
  constructor(private readonly questionExamService: QuestionExamService) {}

  @Post()
  create(@Body() createQuestionExamDto: CreateQuestionExamDto) {
    return this.questionExamService.create(createQuestionExamDto);
  }

  @Get()
  findAll() {
    return this.questionExamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionExamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestionExamDto: UpdateQuestionExamDto) {
    return this.questionExamService.update(+id, updateQuestionExamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionExamService.remove(+id);
  }
}
