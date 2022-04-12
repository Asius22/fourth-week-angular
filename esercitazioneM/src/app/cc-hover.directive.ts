import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ccBackground]'
})
export class CcHoverDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.background_color="black"
   }

}
