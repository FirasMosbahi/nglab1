import { Component } from '@angular/core';
import { Personne } from '../../model/personne';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cv-master-details',
  templateUrl: './cv-master-details.component.html',
  styleUrls: ['./cv-master-details.component.css'],
})
export class CvMasterDetailsComponent {
  cvs: Personne[] = this.activatedRoute.snapshot.data['personnes'];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
  ) {}

  onPersonneSelect(personne: Personne) {
    this.router.navigate(['list', personne.id]);
  }
}
