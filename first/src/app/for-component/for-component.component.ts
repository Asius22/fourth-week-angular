import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-component',
  templateUrl: './for-component.component.html',
  styleUrls: ['./for-component.component.css']
})
export class ForComponentComponent {
  panelOpenState = false;
  i : number = 0;
  numbers : Array<number> = []
  constructor() {
    this.numbers.push(1)
    this.numbers.push(2)
    this.numbers.push(3)
    this.numbers.push(4)
  }

  getNumbers() : Array<number>{
    return this.numbers;
  }

  addNumber(){
    this.numbers.push(this.i++)
  }

  deleteNumber(){
    this.numbers.pop();
  }
}
