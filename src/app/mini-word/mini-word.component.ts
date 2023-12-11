import { Component } from '@angular/core';
import { fonts } from './fonts';

class Style {
  color: string;
  fontSize: number;
  fontFamily: string;
  constructor() {
    this.color = 'black';
    this.fontSize = 24;
    this.fontFamily = 'Arial';
  }
  getStyle() {
    return {
      color: this.color,
      'font-size': `${this.fontSize}px`,
      'font-family': this.fontFamily,
    };
  }
}

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
})
export class MiniWordComponent {
  style: Style = new Style();

  onClick = () => {};

  protected readonly JSON = JSON;
  protected readonly fonts = fonts;
}
