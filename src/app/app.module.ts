import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent
  ],
    imports: [
        BrowserModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
