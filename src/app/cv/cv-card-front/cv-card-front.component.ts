import { Component, Input } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-cv-card-front',
  templateUrl: './cv-card-front.component.html',
  styleUrls: ['./cv-card-front.component.css'],
})
export class CvCardFrontComponent {
  @Input() personne?: Personne;
}
