import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appColoredInput]'
})
export class ColoredInputDirective {
  constructor(private el: ElementRef) {}

  private getRandomColor() {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  }

  @HostListener('keyup') onKeyUp() {
    this.el.nativeElement.style.color = this.getRandomColor();
  }
}
