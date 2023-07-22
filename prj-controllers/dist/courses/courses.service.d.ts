import { Course } from './entities/course.entity';
export declare class CoursesService {
    private courses;
    findAll(): Course[];
    findOne(id: string): Course;
    create(createCourseDTO: any): any;
    update(id: string, updateCourseDTO: any): void;
    remove(id: string): void;
}
