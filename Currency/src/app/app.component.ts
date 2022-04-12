import { Component } from '@angular/core';
import { ListItem } from './models/converter'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Currency';

  array: Array<ListItem> = [];


}
