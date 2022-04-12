import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[ccFontWeight]'
})
export class CcFontWeightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.fontWeight = "bold";
    this.el.nativeElement.style.fontSize = "30px"
  }
}
