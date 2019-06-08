import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule} from './material.module';
import { AppComponent } from './app.component';
import {CountDown} from "ng2-date-countdown";
@NgModule({
  declarations: [
    AppComponent,
    CountDown
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
