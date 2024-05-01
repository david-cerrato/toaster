import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToasterComponent } from './toaster/toaster.component';
import { ToasterItemComponent } from './toaster/toaster-item/toaster-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToasterComponent,
    ToasterItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
