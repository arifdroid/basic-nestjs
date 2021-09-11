import { Controller, Get, Put } from '@nestjs/common'

@Controller('teachers/:teacherId/student')
export class StudentTeacherController {

    @Get()
    getStudent(){
        return 'get all student by this teacher id'
    }

    @Put('/:studentId')
    updateStudentByTeacherId(){
        return 'update student by teacher id'
    }
}