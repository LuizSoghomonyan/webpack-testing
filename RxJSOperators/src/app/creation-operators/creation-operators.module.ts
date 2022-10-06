import { NgModule } from '@angular/core';
import {AjaxComponent} from "./ajax/ajax.component";
import { CreationOperatorsComponent } from './creation-operators.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "../angular-material/material.module";
import {ControlsModule} from "../controls/controls.module";
import { FromComponent } from './from/from.component';
import { OfComponent } from './of/of.component';
import { IntervalComponent } from './interval/interval.component';
import { GenerateComponent } from './generate/generate.component';


@NgModule({
  declarations: [
    AjaxComponent,
    CreationOperatorsComponent,
    FromComponent,
    OfComponent,
    IntervalComponent,
    GenerateComponent
  ],
  exports: [
    RouterModule,
    AjaxComponent,
    CreationOperatorsComponent,
    FromComponent,
    OfComponent,
    IntervalComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    ControlsModule,
    RouterModule.forChild([
      {
        path: '', component: CreationOperatorsComponent, children: [

        ]
      },
      {path: 'ajax', component: AjaxComponent},
      {path: 'of', component: OfComponent},
      {path: 'interval', component: IntervalComponent},
      {path: 'from', component: FromComponent}

    ])

  ]
})
export class CreationOperatorsModule { }

