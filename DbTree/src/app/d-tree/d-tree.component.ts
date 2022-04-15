import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-tree',
  templateUrl: './d-tree.component.html',
  styleUrls: ['./d-tree.component.scss']
})
export class DTreeComponent{

  dataSource: any[] = [];
  panelOpenState = false;

  constructor(private http: HttpClient) {

  }

  getAll() {
    this.http.get<any>("http://localhost:8080/api/v2").subscribe(
      (element) => {
        this.dataSource = element
        console.log("departments: " + element)
      }
    )
  }
}
