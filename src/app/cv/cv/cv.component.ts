import { Component, OnDestroy, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';
import { EmbaucheService } from '../../services/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { AgeEnum } from '../enums/age';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  constructor(
    private readonly embauchService: EmbaucheService,
    private readonly toasterService: ToastrService,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  cvs: Personne[] = this.activatedRoute.snapshot.data['personnes'];
  selectedCv?: Personne;
  cvsFilter: AgeEnum = AgeEnum.JUNIOR;
  filteredCvs: Personne[] = this.cvs.filter(
    (cv) => (this.cvsFilter === AgeEnum.JUNIOR) !== cv.age >= 40,
  );
  selectPersonne(selectedPersonne: Personne) {
    this.selectedCv = selectedPersonne;
  }

  embauched$ = new Observable<Personne[] | null>();

  changeCvsFilter(filter: AgeEnum) {
    this.cvsFilter = filter;
    this.filteredCvs = this.cvs.filter(
      (cv) => (filter === AgeEnum.JUNIOR) !== cv.age >= 40,
    );
  }

  ngOnInit(): void {
    // this.cvService.getPersonnes$().subscribe({
    //   next: (cvs) => {
    //     this.toasterService.success('CVs fetched successfuly');
    //     this.cvs = cvs;
    //     this.filteredCvs = this.cvs.filter(
    //       (cv) => (this.cvsFilter === AgeEnum.JUNIOR) !== cv.age >= 40,
    //     );
    //   },
    // });
    this.embauched$ = this.embauchService.embauchedCv$.pipe(
      tap((personne) => {
        this.toasterService.success('personne embauched successfully');
      }),
      catchError((err) => {
        this.toasterService.error(err);
        return of(null);
      }),
    );
  }

  protected readonly Personne = Personne;
}
