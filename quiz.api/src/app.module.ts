import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { QuestionModule } from './question/question.module';
import { CategoryModule } from './category/category.module';
import { AnswerModule } from './answer/answer.module';
import { ExamModule } from './exam/exam.module';
import { CustomerModule } from './customer/customer.module';
import config from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config),
    UserModule, AuthModule,
    UserModule, QuestionModule,
    CategoryModule, AnswerModule, ExamModule, CustomerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
