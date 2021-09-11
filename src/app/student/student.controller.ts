import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common'

@Controller('students')
export class StudentController {

    @Get()
    getStudents() {
        return "All students check"
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
    createStudent(

        // @Body('name')
        @Body() body 
    ) {
        
        return `student created with data ${JSON.stringify(body)}`
    }

    @Put('/:studentId')
    updateStudentById(

        @Param('studentId') studentId:string, 
        @Body() body

    ) {

        
        return 'student updated'
    }


}
