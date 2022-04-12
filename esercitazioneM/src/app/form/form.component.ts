import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  disable: boolean = false;
  getRates() {
    let a: Array<number> = [];
    for (let i = 1; i < 5.5; i += 0.5) {
      a.push(i )
    }
    return a;
  }

  addPizza(form: NgForm) {
    alert(
      form.value.pizza
    );
    this.disable = true;
    setTimeout(() => {
      this.disable = false
    }, 5000)

    form.resetForm()
  }

}
