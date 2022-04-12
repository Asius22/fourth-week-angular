import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToggleButtonsComponent } from './toggle-buttons/toggle-buttons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app.material.module';
import { MoneyShowerComponent } from './money-shower/money-shower.component';
import { CurrencyListItemComponent } from './currency-list-item/currency-list-item.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { ToEurDirectiveDirective } from './to-eur-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToggleButtonsComponent,
    MoneyShowerComponent,
    CurrencyListItemComponent,
    CurrencyListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ ToEurDirectiveDirective ],
  bootstrap: [AppComponent]
})
export class AppModule { }
