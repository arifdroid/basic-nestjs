import { Module } from '@nestjs/common';
import { StudentTeacherController } from 'src/teacher/student.controller';
import { TeacherController } from 'src/teacher/teacher.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {StudentController} from './student/student.controller'


@Module({
  imports: [],
  controllers: [StudentController, TeacherController, StudentTeacherController],
  providers: [AppService],
})
export class AppModule {}
