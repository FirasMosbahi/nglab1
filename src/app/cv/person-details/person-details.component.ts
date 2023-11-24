import { Component, OnInit } from '@angular/core';
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
export class PersonDetailsComponent implements OnInit {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly toasterService: ToastrService,
    private readonly cvService: CvService,
    private readonly router: Router,
  ) {}
  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      if (data['personne'] == null) {
        this.router.navigate(['notfound']);
      }
      this.personne = data['personne'];
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
      error: () => {
        this.toasterService.error('An error occurred while deleting cv');
        this.backToCvsPage();
      },
    });
  }
  personne?: Personne;
}
