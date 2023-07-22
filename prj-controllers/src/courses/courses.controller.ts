import { CoursesService } from './courses.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly CoursesService: CoursesService) {}
  @Get()
  findAll() {
    return this.CoursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.CoursesService.findOne(id);
  }

  @Post()
  create(@Body() CreateCourseDto: CreateCourseDto): void{
    return this.CoursesService.create(CreateCourseDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateCourseDto: UpdateCourseDto) {
    return this.CoursesService.update(id, UpdateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.CoursesService.remove(id);
  }
}
