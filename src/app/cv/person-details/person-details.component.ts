import { Component, OnDestroy, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';
import { ROUTES } from '../../router';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../../services/cv.service';
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
    this.personne = this.activatedRoute.snapshot.data['personne'];
    // this.activatedRoute.data.subscribe((data) => {
    //   if (data['personne'] == null) {
    //     this.router.navigate(['notfound']);
    //   }
    //   this.personne = data['personne'];
    // });
  }
  async backToCvsPage() {
    await this.router.navigate([ROUTES.cv]);
  }
  async deleteCV() {
    this.cvService.deleteCv$(this.personne?.id ?? -1);
  }
  personne?: Personne;
}
