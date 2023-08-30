import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { SelectorComponent } from './components/selector/selector.component';
import SelectionItemComponent from './components/selection-item/selection-item.component';

@NgModule({
  declarations: [AppComponent, SelectorComponent, SelectionItemComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
