import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import {AjaxComponent} from './creation-operators/ajax/ajax.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "./angular-material/material.module";
import {AppRoutingModule} from "./app.routing.module";
import { HomePageComponent } from './home-page/home-page.component';
import {SharedModule} from "./shared/shared.module";
import {ControlsModule} from "./controls/controls.module";

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
    ControlsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
