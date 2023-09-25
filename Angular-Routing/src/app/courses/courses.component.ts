import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/Models/Course';
import { CoursesService } from 'src/Services/CoursesServices';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {
  service:CoursesService = inject(CoursesService)
  courses: Course[];
  router:Router = inject(Router)
  ngOnInit() {
    this.courses = this.service.GetAllCourses();
  }
  NavToCourse(param:number){
    this.router.navigateByUrl(`Courses/Course/${param}`)
  }
}
