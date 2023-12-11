import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personne } from '../../model/personne';
import { AgeEnum } from '../enums/age';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent {
  @Input() showFilters: boolean = true;
  @Input() personnes: Personne[] | null = [];
  @Output() selectedPersonne = new EventEmitter<Personne>();
  @Output() filterSelected = new EventEmitter<AgeEnum>();
  selectedAge: AgeEnum = AgeEnum.JUNIOR;
  getButtonClass = (buttonFilter: AgeEnum) =>
    `btn btn-secondary ms-2 my-2 ${
      this.selectedAge === buttonFilter ? 'active' : ''
    }`;
  selectFilter(filter: AgeEnum) {
    this.filterSelected.emit(filter);
    this.selectedAge = filter;
  }
  protected readonly AgeEnum = AgeEnum;
}
