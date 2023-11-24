import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { CvService } from '../../services/cv.service';
import { EmbaucheService } from '../../services/embauche.service';
import { personnesMock } from '../../services/personne.mock';
import { ToastrService } from 'ngx-toastr';
import { AgeEnum } from '../enums/age';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  constructor(
    private readonly cvService: CvService,
    private readonly embauchService: EmbaucheService,
    private readonly toasterService: ToastrService,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  cvs: Personne[] = this.activatedRoute.snapshot.data['personnes'];
  selectedCv?: Personne;
  embauchedPersonnes: Personne[] = [];
  cvsFilter: AgeEnum = AgeEnum.JUNIOR;
  filteredCvs: Personne[] = this.cvs.filter(
    (cv) => (this.cvsFilter === AgeEnum.JUNIOR) !== cv.age >= 40,
  );

  selectPersonne(selectedPersonne: Personne) {
    this.selectedCv = selectedPersonne;
  }

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
    this.embauchService.embauchedCv$.subscribe({
      next: (personne) => {
        this.toasterService.success('personne embauched successfully');
        this.embauchedPersonnes.push(personne);
      },
      error: (err) => {
        this.toasterService.error(err);
      },
    });
  }
}
