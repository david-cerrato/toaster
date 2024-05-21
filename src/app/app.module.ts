import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToasterComponent } from './toaster/toaster.component';
import { ToasterItemComponent } from './toaster/toaster-item/toaster-item.component';
import { IconComponent } from './toaster/toaster-item/icon/icon.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToasterComponent,
    ToasterItemComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
