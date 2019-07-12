import { environment } from './../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { School, Course, Teacher, Student, Enrollment, Grade } from './bo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly baseUrl: string;
  private readonly GET_SCHOOL = 'api/v1/schools';
  private readonly GET_COURSES = 'api/v1/courses';
  private readonly GET_TEACHERS = 'api/v1/teachers';
  private readonly GET_STUDENTS = 'api/v1/students';
  private readonly GET_ENROLLMENTS = 'api/v1/enrollments';
  private readonly GET_GRADES = 'api/v1/grades';

  constructor(private readonly http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  public getSchools(): Observable<Array<School>> {
    return this.getData(this.GET_SCHOOL)
      .pipe(
        map(d => d.map(s => new School(s.id, s.name)))
      );
  }

  public getCourses(): Observable<Array<Course>> {
    return this.getData(this.GET_COURSES)
      .pipe(
        map(d => d.map(c => new Course(c.id, c.room, c.school_id, c.teacher_id, c.subject, c.start_time, c.stop_time)))
      );
  }

  public getTeachers(): Observable<Array<Teacher>> {
    return this.getData(this.GET_TEACHERS)
      .pipe(
        map(d => d.map(t => new Teacher(t.id, t.first_name, t.last_name, t.gender)))
      );
  }

  public getStudents(): Observable<Array<Student>> {
    return this.getData(this.GET_STUDENTS)
      .pipe(
        map(d => d.map(s => new Student(s.id, s.first_name, s.last_name, s.gender)))
      );
  }

  public getEnrollments(): Observable<Array<Enrollment>> {
    return this.getData(this.GET_ENROLLMENTS)
      .pipe(
        map(d => d.map(e => new Enrollment(e.course_id, e.student_id)))
      );
  }

  public getGrades(): Observable<Array<Grade>> {
    return this.getData(this.GET_GRADES)
      .pipe(
        map(d => d.map(g => new Grade(g.id, g.course_id, g.student_id, g.grade)))
      );
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

  private getData(endpoint: string): Observable<any> {
    const url: string = `${this.baseUrl}/${endpoint}`;
    return this.http.get(url, {headers : this.getHeaders() });
  }
}
