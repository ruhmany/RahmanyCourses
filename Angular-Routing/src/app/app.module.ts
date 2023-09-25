import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MyservicesComponent } from './home/myservices/myservices.component';
import { CoursedetailsComponent } from './courses/coursedetails/coursedetails.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';

const approuts: Routes = [
  {path:'', component:LoginComponent},
  // {path:'', redirectTo:'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path:'Contacts', component:ContactComponent},
  {path:'Courses', component:CoursesComponent},
  {path: 'About', component:AboutComponent},
  {path: 'MyServices', component:MyservicesComponent},
  {path: 'Courses/Course/:id', component:CoursedetailsComponent},
  {path:'**', component:NotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    CoursesComponent,
    HeaderComponent,
    MyservicesComponent,
    CoursedetailsComponent,
    FooterComponent,
    NotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approuts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
