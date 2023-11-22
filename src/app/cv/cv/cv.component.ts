import { Component } from '@angular/core';
import { Personne } from '../model/personne';
import { CvService } from '../../services/cv.service';
import { EmbaucheService } from '../../services/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { personnesMock } from '../../services/personne.mock';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  constructor(
    private readonly cvService: CvService,
    private readonly embauchService: EmbaucheService,
    private readonly toasterService: ToastrService,
  ) {}

  cvs: Personne[] = [];
  selectedCv?: Personne;
  embauchedPersonnes: Personne[] = [];

  selectPersonne(selectedPersonne: Personne) {
    this.selectedCv = selectedPersonne;
  }

  ngOnInit(): void {
    this.cvService.cvs$.subscribe({
      next: (cvs) => {
        this.toasterService.success('Cvs fetched successfully');
        this.cvs = cvs;
      },
      error: (err) => {
        this.toasterService.error('An error occurred while fetching cvs');
        this.cvs = personnesMock;
      },
    });
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
