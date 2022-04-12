import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import {MatListModule} from '@angular/material/list';

@NgModule({
  exports: [
    MatListModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule, FormsModule
  ]
})
export class MaterialModule { }

