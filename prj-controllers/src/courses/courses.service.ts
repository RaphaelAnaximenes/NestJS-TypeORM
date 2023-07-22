import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do FW NestJS',
      description: 'Fundamentos Nest',
      tags: ['node.js', 'nestjs', 'javascript'],
    },
  ];

  findAll() {
    const list = this.courses;
    if(list.length === 0) throw new HttpException(`No content yet...`, HttpStatus.NO_CONTENT)
    return list;
  }

  findOne(id: string) {
    const course = this.courses.find((course: Course) => course.id === Number(id));
    
    if(!course) {
      throw new HttpException(
        `Acho que não encontramos o curso ${id}, foi mal :/`,
        HttpStatus.NOT_FOUND)
      
      }
      return course; 
  }
          
  create(createCourseDTO: any) {
    this.courses.push(createCourseDTO);
    return createCourseDTO;
  }

  update(id: string, updateCourseDTO: any) {
    const indexCourse = this.courses.findIndex(
      (course: Course) => course.id === Number(id),
    );

    this.courses[indexCourse] = updateCourseDTO;
  }
  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (course: Course) => course.id === Number(id),
    );
    
    if (indexCourse >= 0) this.courses.splice(indexCourse, 1);
  }
}