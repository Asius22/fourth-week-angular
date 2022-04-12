import { Component, OnInit } from '@angular/core';
import { Pizza } from '../model/element';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent{
  pizze: Array<Pizza> = []
  displayedColumns: string[] = ['id', 'gusto', 'rate'];

  constructor() {
    this.pizze.push({ id: 1, gusto: "margherita", rate: 5 })
    this.pizze.push({ id: 2, gusto: "patatine", rate:4})
    this.pizze.push({ id: 3, gusto: "broccoli", rate:5})
    this.pizze.push({ id: 4, gusto: "boh", rate:1})
  }

  getSource() {
    return this.pizze
  }

}
