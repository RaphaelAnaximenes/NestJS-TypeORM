"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
let CoursesService = exports.CoursesService = class CoursesService {
    constructor() {
        this.courses = [
            {
                id: 1,
                name: 'Fundamentos do FW NestJS',
                description: 'Fundamentos Nest',
                tags: ['node.js', 'nestjs', 'javascript'],
            },
        ];
    }
    findAll() {
        const list = this.courses;
        if (list.length === 0)
            throw new common_1.HttpException(`No content yet...`, common_1.HttpStatus.NO_CONTENT);
        return list;
    }
    findOne(id) {
        const course = this.courses.find((course) => course.id === Number(id));
        if (!course) {
            throw new common_1.HttpException(`Acho que não encontramos o curso ${id}, foi mal :/`, common_1.HttpStatus.NOT_FOUND);
        }
        return course;
    }
    create(createCourseDTO) {
        this.courses.push(createCourseDTO);
        return createCourseDTO;
    }
    update(id, updateCourseDTO) {
        const indexCourse = this.courses.findIndex((course) => course.id === Number(id));
        this.courses[indexCourse] = updateCourseDTO;
    }
    remove(id) {
        const indexCourse = this.courses.findIndex((course) => course.id === Number(id));
        if (indexCourse >= 0)
            this.courses.splice(indexCourse, 1);
    }
};
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)()
], CoursesService);
//# sourceMappingURL=courses.service.js.map