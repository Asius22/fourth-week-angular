import { NgModule, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  imports: [MatExpansionModule, MatToolbarModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  exports: [MatExpansionModule, MatToolbarModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule]
})
export class MaterialModuleComponent {
}
