import { Component, Input } from '@angular/core';
import { Service } from 'src/Models/Service';

@Component({
  selector: 'app-myservices',
  templateUrl: './myservices.component.html',
  styleUrls: ['./myservices.component.css']
})
export class MyservicesComponent {
  @Input()
  service:Service;
}
