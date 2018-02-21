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
import { HomeComponent } from './home/home.component';
import { DemoRouterModule } from './router/router.module';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    AfterViewComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DemoRouterModule
    
  ],
  providers: [ListService, CommunicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
