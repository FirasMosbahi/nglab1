import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personne } from '../model/personne';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-person-list-element',
  templateUrl: './person-list-element.component.html',
  styleUrls: ['./person-list-element.component.css'],
})
export class PersonListElementComponent {
  @Input() personne?: Personne;
  constructor() {}
}
