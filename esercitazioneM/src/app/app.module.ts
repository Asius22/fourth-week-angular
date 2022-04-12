import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaterialModule } from './app.materialmodule';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ButtonsListComponent } from './buttons-list/buttons-list.component';
import { TableListComponent } from './table-list/table-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { CcHoverDirective } from './cc-hover.directive';
import { UnlessDirectiveDirective } from './unless-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ButtonsListComponent,
    TableListComponent,
    FormComponent,
    CcHoverDirective,
    UnlessDirectiveDirective
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [TableListComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
