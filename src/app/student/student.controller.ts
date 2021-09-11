import { Controller, Get, Post, Put, Param } from '@nestjs/common'

@Controller('students')
export class StudentController {

    @Get()
    getStudents() {
        return "All students"
    }

    @Get('/:studentId')
    getStudentsById(

        @Param('studentId') studentId: string

        // @Param() params: { studentId: String }

    ) {

        // const { studentId } = params

        return `get student id `
    }

    @Post()
    createStudent() {
        return 'student created'
    }

    @Put('/:studentId')
    updateStudentById() {
        return 'student updated'
    }


}
