import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './listComponent/list.component';
import { ListService } from './list.service';
import { DetailComponent } from './detail/detail.component';
import { CommunicatorService } from './communicator.service';
import { AfterViewComponent } from './after-view/after-view.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    AfterViewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [ListService, CommunicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
