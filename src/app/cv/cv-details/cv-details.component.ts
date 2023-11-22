import { Component, Input } from '@angular/core';
import { Personne } from '../model/personne';
import { EmbaucheService } from '../../services/embauche.service';
import { Router } from '@angular/router';
import { ROUTES } from '../../router';

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.css'],
})
export class CvDetailsComponent {
  @Input() personne?: Personne;

  isFlipped = false;

  toggleCard() {
    this.isFlipped = !this.isFlipped;
  }
}
