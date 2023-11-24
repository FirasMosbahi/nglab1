import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { CvService } from '../services/cv.service';
import { of } from 'rxjs';
import { Personne } from '../cv/model/personne';

export const cvDetailsResolver: ResolveFn<Personne | null> = (route, state) => {
  const cvService = inject(CvService);
  const id = route.params['id'];
  if (isNaN(+id)) {
    return of(null);
  }
  return cvService.getPersonneById(id);
};
