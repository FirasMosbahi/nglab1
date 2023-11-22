import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-cv-embauch',
  templateUrl: './cv-embauch.component.html',
  styleUrls: ['./cv-embauch.component.css'],
})
export class CvEmbauchComponent {
  @Input() embauchedPersonne: Personne[] = [];
}
