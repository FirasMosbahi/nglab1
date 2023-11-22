import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Personne } from '../cv/model/personne';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  constructor(private readonly toasterService: ToastrService) {}

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
