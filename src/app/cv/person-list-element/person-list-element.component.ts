import { Component, Input } from '@angular/core';
import { Personne } from '../../model/personne';

@Component({
  selector: 'app-person-list-element',
  templateUrl: './person-list-element.component.html',
  styleUrls: ['./person-list-element.component.css'],
})
export class PersonListElementComponent {
  @Input() personne?: Personne;
  constructor() {}
}
