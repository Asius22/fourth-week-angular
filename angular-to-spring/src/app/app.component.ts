import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-to-spring';
  users: any[] = [];
  constructor(
    private http : HttpClient
  ) {
    this.http.get<any>("http://localhost:8080/api/v1/all").subscribe(
      (element) => this.users = element
    );
  }
}
