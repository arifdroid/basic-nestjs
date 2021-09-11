import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {

    @Get()
    getTeachers(){
        return "All teachers"
    }

    @Get('/:teacherId')
    getTeacherById(){
        return `get student id `
    }

    @Post()
    createTeacher(){
        return 'teacher created'
    }

    @Put('/:teacherId')
    updateTeacherById(){
        return 'teacher updated'
    }


}
