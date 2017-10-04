import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LatestComponent } from './latest/latest.component';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LatestComponent,
    ListComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    CollapseModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
