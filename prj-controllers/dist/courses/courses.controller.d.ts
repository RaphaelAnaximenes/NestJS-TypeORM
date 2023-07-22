import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto/update-course.dto';
export declare class CoursesController {
    private readonly CoursesService;
    constructor(CoursesService: CoursesService);
    findAll(): import("./entities/course.entity").Course[];
    findOne(id: string): import("./entities/course.entity").Course;
    create(CreateCourseDto: CreateCourseDto): void;
    update(id: string, UpdateCourseDto: UpdateCourseDto): void;
    remove(id: string): void;
}
