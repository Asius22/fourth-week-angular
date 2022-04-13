import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSpanStyle]'
})
export class SpanStyleDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.fontWeight = 600;
    this.element.nativeElement.style.fontSize = "40px";
    this.element.nativeElement.style.padding = 12;
  }

}
