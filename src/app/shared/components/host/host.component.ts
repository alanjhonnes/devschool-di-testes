import { Component, Host, Optional, Self, SkipSelf } from '@angular/core';
import { FlowerService } from '../../services/flower.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css'],
  //  provide the service
  providers: [{ provide: FlowerService, useValue: { emoji: '🌼' } }]
})
export class HostComponent {
  // use @Host() in the constructor when injecting the service
  constructor(
  @Host()
  // @Optional()
  public flower?: FlowerService) { }

}

// if you take out @Host() and the providers array, flower will be red hibiscus




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
