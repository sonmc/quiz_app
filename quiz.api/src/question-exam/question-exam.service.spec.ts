import { Test, TestingModule } from '@nestjs/testing';
import { QuestionExamService } from './question-exam.service';

describe('QuestionExamService', () => {
  let service: QuestionExamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionExamService],
    }).compile();

    service = module.get<QuestionExamService>(QuestionExamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
