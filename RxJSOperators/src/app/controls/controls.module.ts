import { NgModule } from '@angular/core';
import {CardComponent} from "./card/card.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../angular-material/material.module";


@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ],

  imports: [
    SharedModule,
    RouterModule,
    MaterialModule
  ]
})
export class  ControlsModule{ }

