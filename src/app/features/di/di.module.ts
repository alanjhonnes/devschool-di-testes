import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiRoutingModule } from './di-routing.module';
import { DiComponent } from './di.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    DiComponent
  ],
  imports: [
    CommonModule,
    DiRoutingModule,
    SharedModule
  ]
})
export class DiModule { }
