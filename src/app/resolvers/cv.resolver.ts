import { ResolveFn } from '@angular/router';
import { CvService } from '../services/cv.service';
import { inject } from '@angular/core';
import { Personne } from '../model/personne';

export const cvResolver: ResolveFn<Personne[]> = (route, state) => {
  const cvService = inject(CvService);

  return cvService.getPersonnes$();
};
