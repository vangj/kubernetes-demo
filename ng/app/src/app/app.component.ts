import { Component, OnInit } from '@angular/core';
import { DataService } from './service';
import { School, Course, Teacher, Student, Enrollment, Grade } from './bo';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'University Services';
  schools: Array<School>;
  courses: Array<Course>;
  teachers: Array<Teacher>;
  students: Array<Student>;
  enrollments: Array<Enrollment>;
  grades: Array<Grade>;
  
  fCourses: Array<Course>;
  fStudents: Array<Student>;

  school: School;
  course: Course;
  teacher: Teacher;
  student: Student;
  grade: Grade;

  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
    forkJoin(
      this.dataService.getSchools(),
      this.dataService.getCourses(),
      this.dataService.getTeachers(),
      this.dataService.getStudents(),
      this.dataService.getEnrollments(),
      this.dataService.getGrades()
    )
    .pipe(
      tap(d => console.log(d))
    )
    .subscribe(
      d => {
        this.schools = d[0];
        this.courses = d[1];
        this.teachers = d[2];
        this.students = d[3];
        this.enrollments = d[4];
        this.grades = d[5];
      },
      e => console.error(e)
    )
  }

  schoolSelected(e: any): void {
    const id = +e.target.value;
    if (-1 === id) {
      this.fCourses = [];
      return;
    }

    this.fStudents = [];
    this.teacher = null;
    this.student = null;
    this.grade = null;

    this.school = this.schools.filter(s => s.id === id)[0];
    this.fCourses = this.courses.filter(c => c.schoolId === this.school.id);
  }

  courseSelected(e: any): void {
    const id = +e.target.value;
    if (-1 === id) {
      this.teacher = null;
      this.fStudents = [];
      return;
    }
    this.course = this.courses.filter(c => c.id === id)[0];
    this.teacher = this.teachers.filter(t => t.id === this.course.teacherId)[0];

    const studentIds = this.enrollments
      .filter(e => e.courseId === this.course.id)
      .map(e => e.studentId);
    this.fStudents = this.students.filter(s => studentIds.includes(s.id));
  }

  studentSelected(e: any): void {
    const id = +e.target.value;
    if (-1 === id) {
      return;
    }
    this.student = this.students.filter(s => s.id === id)[0];
    this.grade = this.grades.filter(g => g.courseId === this.course.id && g.studentId === this.student.id)[0];
  }
}
