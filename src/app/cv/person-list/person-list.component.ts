import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent {
  @Input() personnes: Personne[] = [];
  @Output() selectedPersonne = new EventEmitter<Personne>();
}
