import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
  hide : boolean = true;

  constructor() {
    setTimeout(
      () => {
        this.hide = !this.hide;
      }, 2000
    )
  }
}
