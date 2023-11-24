import { ResolveFn } from '@angular/router';
import { CvService } from '../services/cv.service';
import { inject } from '@angular/core';
import { Personne } from '../cv/model/personne';

export const cvResolver: ResolveFn<Personne[]> = (route, state) => {
  console.log('started');
  const cvService = inject(CvService);

  return cvService.getPersonnes$();
};
