import { Course } from "src/Models/Course";

export class CoursesService{

    Courses:Course[] = [
        new Course("JavaScript Advanced", 1, "../assets/images/JS.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint saepe provident consequatur explicabo molestiae error voluptas laboriosam doloribus aspernatur. Ratione corporis eos officia vero quae deserunt assumenda nulla, incidunt explicabo."),
        new Course("Angular", 2, "../assets/images/Angular.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint saepe provident consequatur explicabo molestiae error voluptas laboriosam doloribus aspernatur. Ratione corporis eos officia vero quae deserunt assumenda nulla, incidunt explicabo."),
        new Course("HTML", 3, "../assets/images/HTML.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint saepe provident consequatur explicabo molestiae error voluptas laboriosam doloribus aspernatur. Ratione corporis eos officia vero quae deserunt assumenda nulla, incidunt explicabo."),

        new Course("CSS", 4, "../assets/images/CSS.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint saepe provident consequatur explicabo molestiae error voluptas laboriosam doloribus aspernatur. Ratione corporis eos officia vero quae deserunt assumenda nulla, incidunt explicabo."),

        new Course(".Net 6", 5, "../assets/images/DotNet.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint saepe provident consequatur explicabo molestiae error voluptas laboriosam doloribus aspernatur. Ratione corporis eos officia vero quae deserunt assumenda nulla, incidunt explicabo."),
        new Course("SQL", 6, "../assets/images/SQL.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint saepe provident consequatur explicabo molestiae error voluptas laboriosam doloribus aspernatur. Ratione corporis eos officia vero quae deserunt assumenda nulla, incidunt explicabo."),
    ]

    GetAllCourses(){
        return this.Courses;
    }

}