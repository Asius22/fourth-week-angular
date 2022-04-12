import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  condition = false;

  title = 'esercitazioneM';

  getClass():string {
    return (this.condition) ? "div, blue" : "div, yellow";
  }
}
