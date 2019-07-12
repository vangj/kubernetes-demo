import { Component, OnInit } from '@angular/core';
import { DataService } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getSchools()
      .subscribe(
        d => console.log(d),
        e => console.error(e)
      );
    this.dataService.getCourses()
      .subscribe(
        d => console.log(d),
        e => console.error(e)
      );
    this.dataService.getTeachers()
      .subscribe(
        d => console.log(d),
        e => console.error(e)
      );
    this.dataService.getStudents()
      .subscribe(
        d => console.log(d),
        e => console.error(e)
      );
    this.dataService.getEnrollments()
      .subscribe(
        d => console.log(d),
        e => console.error(e)
      );
    this.dataService.getGrades()
      .subscribe(
        d => console.log(d),
        e => console.error(e)
      );
  }
}
