import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-treet',
  templateUrl: './s-treet.component.html',
  styleUrls: ['./s-treet.component.scss']
})
export class STreetComponent {

  dataSource: any[] = [];
  panelOpenState = false;

  constructor(private http: HttpClient) {

  }

  getAll() {
    
    this.http.get<any>("http://localhost:8080/api/v1").subscribe(
      (element) => {
        this.dataSource = element
        console.log("students: " + element)
      }
    )
  }
}
