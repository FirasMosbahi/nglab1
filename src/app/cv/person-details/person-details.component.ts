import { Component, Input } from '@angular/core';
import { Personne } from '../model/personne';
import { ROUTES } from '../../router';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../../services/cv.service';
import { personnesMock } from '../../services/personne.mock';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
})
export class PersonDetailsComponent {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly toasterService: ToastrService,
    private readonly cvService: CvService,
    private readonly router: Router,
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id = +params['id'];
      this.cvService.cvs$.subscribe({
        next: (cvs) => {
          this.personne = cvs.find((cv) => cv.id === id);
        },
        error: (err) => {
          this.personne = personnesMock.find((cv) => cv.id === id);
        },
      });
    });
  }
  async backToCvsPage() {
    await this.router.navigate([ROUTES.cv]);
  }
  async deleteCV() {
    this.cvService.deleteCv$(this.personne?.id ?? -1).subscribe({
      next: () => {
        this.toasterService.success('Cv deleted successfully');
        this.backToCvsPage();
      },
      error: (err) => {
        this.toasterService.error('An error occurred while deleting cv');
        this.backToCvsPage();
      },
    });
  }
  personne?: Personne;
}
