import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
  private students = [
    { id: 1, name: 'Dhanushri', course: 'IT' },
    { id: 2, name: 'Rahul', course: 'CSE' },
  ]

  findAll() {
    return this.students
  }

  create(createStudentDto: CreateStudentDto) {
    const newStudent = {
      id: this.students.length + 1,
      ...createStudentDto,
    }

    this.students.push(newStudent)
    return newStudent
  }
}