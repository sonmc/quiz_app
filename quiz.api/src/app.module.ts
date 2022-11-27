import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { QuestionModule } from './question/question.module';
import { CategoryModule } from './category/category.module';
import { AnswerModule } from './answer/answer.module';
import { ExamModule } from './exam/exam.module';
import { ClassModule } from './class/class.module';
import { StudentModule } from './student/student.module';
import { StudentClassModule } from './student-class/student-class.module';
import { StudentAnswerModule } from './student-answer/student-answer.module';
import { QuestionExamModule } from './question-exam/question-exam.module';
import { ConfigurationModule } from './configuration/configuration.module';

@Module({
  imports: [
    ConfigurationModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mysql',
          host: config.get<string>('database.host'),
          port: config.get<number>('database.port'),
          username: config.get<string>('database.userName'),
          password: config.get<string>('database.password'),
          database: config.get<string>('database.name'),
          entities: [join(__dirname, '**', '*.entity.{ts,js}')],
          synchronize: true,
          logging: ['query', 'error'],
        };
      },
    }),
    UserModule,
    AuthModule,
    UserModule,
    QuestionModule,
    CategoryModule,
    AnswerModule,
    ExamModule,
    ClassModule,
    StudentModule,
    StudentClassModule,
    StudentAnswerModule,
    QuestionExamModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
