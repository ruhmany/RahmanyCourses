import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/Services/ServicesService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ServicesService]
})
export class HomeComponent {

  router:Router = inject(Router)
  activeRoute:ActivatedRoute = inject(ActivatedRoute)
  services: ServicesService =inject(ServicesService)

  ourservices = this.services.services;
}
