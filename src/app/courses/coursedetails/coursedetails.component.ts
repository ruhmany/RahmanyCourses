import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/Models/Course';
import { CoursesService } from 'src/Services/CoursesServices';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css'],
  providers: [CoursesService]
})
export class CoursedetailsComponent implements OnInit {

  courseID:number;
  selectedCourse:Course;

  coursesService:CoursesService = inject(CoursesService)
  activeRouter:ActivatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    this.courseID = +this.activeRouter.snapshot.paramMap.get('id')
    this.selectedCourse = this.coursesService.Courses.find(c => c.ID === this.courseID);
    console.log(this.selectedCourse);
  }

}
