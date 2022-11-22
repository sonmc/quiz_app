import { Test, TestingModule } from '@nestjs/testing';
import { QuestionExamController } from './question-exam.controller';
import { QuestionExamService } from './question-exam.service';

describe('QuestionExamController', () => {
  let controller: QuestionExamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionExamController],
      providers: [QuestionExamService],
    }).compile();

    controller = module.get<QuestionExamController>(QuestionExamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
