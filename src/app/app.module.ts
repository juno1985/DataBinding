import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    BindComponent
  
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
      /**响应式编程需要的引入 */
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
