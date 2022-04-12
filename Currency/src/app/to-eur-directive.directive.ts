import { Directive } from '@angular/core';

@Directive({
  selector: '[appToEurDirective]'
})
export class ToEurDirectiveDirective {

  constructor() { }

  toEur(value: number) {
    alert(value)
  }
}
