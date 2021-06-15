import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {userService} from './app.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupModalComponent } from './examples/popup-modal/popup-modal.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule , NgbModule.forRoot()],
  declarations: [ AppComponent, PopupModalComponent ],
  providers:[userService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
