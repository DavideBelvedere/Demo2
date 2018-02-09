import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './listComponent/list.component';
import { ListService } from './list.service';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
