import {Component, Input} from '@angular/core';
import {Personne} from '../model/personne';
import {ROUTES} from '../../router';
import {EmbaucheService} from '../../services/embauche.service';
import {Router} from '@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-cv-card-back',
  templateUrl: './cv-card-back.component.html',
  styleUrls: ['./cv-card-back.component.css'],
})
export class CvCardBackComponent {
  constructor(
    private readonly embauchService: EmbaucheService,
    private readonly router: Router,
    private readonly toasterService: ToastrService,
  ) {}
  @Input() personne?: Personne;
  hire(event: Event) {
    event.stopPropagation();
    if (this.personne !== undefined) {
      try {
        this.embauchService.embauche(this.personne);
      } catch (e: any) {
        this.toasterService.error(e.message)
      }
    }
  }
  async getMoreInfos(event: Event) {
    event.stopPropagation();
    await this.router.navigate([ROUTES.cvDetails, this.personne?.id ?? 0]);
  }
}
