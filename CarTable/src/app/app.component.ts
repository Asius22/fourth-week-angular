import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { Car } from './model/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Students';
  students: any[] = []
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'course', 'age', 'enrollmentYear', 'delete'];
  name: string = "";
  id: number = -1;
  constructor(private http: HttpClient) {
    this.getAll()
  }

  getAll() {
    this.http.get<any>("http://localhost:8080/students").subscribe((element) =>
      this.students = element
    )
  }

  getByName() {
    if (this.name == "")
      this.getAll()
    else
      this.http.get<any>("http://localhost:8080/students/name?name=" + this.name).subscribe(
        (element) => {
          console.log(element)
          this.students = element
        }
      )
  }

  getByid() {
    if (this.id != null && this.id > -1)
      this.http.get<any>("http://localhost:8080/students/id?id=" + this.id).subscribe(
        (element) => {
          if (element != null) {
            this.students = [];
            this.students.push(element)
          }
          console.log(element)
        })
    else
      this.getAll()
  }


  deleteElement(id: any) {

    this.http.get<any>("http://localhost:8080/students/delete?id=" + parseInt(id)).subscribe(
      () => this.getAll()
    )
  }
}
