import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  switchMap,
} from 'rxjs';
import { Personne } from '../model/personne';
import { CvService } from '../../services/cv.service';
import { Router } from '@angular/router';
import { ROUTES } from '../../router';

@Component({
  selector: 'app-autocomplete-search',
  templateUrl: './autocomplete-search.component.html',
  styleUrls: ['./autocomplete-search.component.css'],
})
export class AutocompleteSearchComponent {
  constructor(
    private readonly cvService: CvService,
    private readonly router: Router,
  ) {}
  name = new FormControl();
  personnes$: Observable<Personne[]> = new Observable();

  ngOnInit(): void {
    this.personnes$ = this.name.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm) => this.cvService.getPersonneByName(searchTerm)),
    );
  }

  redirectToDetails(personne: Personne) {
    this.router.navigate([ROUTES.cvDetails, personne.id]);
  }
}
