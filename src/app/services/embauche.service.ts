import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Personne } from '../cv/model/personne';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  constructor() {}

  embauchedCvs: Personne[] = [];

  embauchedCv$: Subject<Personne> = new Subject<Personne>();

  public embauche(personne: Personne) {
    if (!this.embauchedCvs.find((p) => p.id === personne?.id)) {
      this.embauchedCvs.push(personne);
      this.embauchedCv$.next(personne);
    } else {
      throw new Error('personne already embauched');
    }
  }
}
