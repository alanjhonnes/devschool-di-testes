import { Component } from '@angular/core';
import { FlowerService } from '../../services/flower.service';


@Component({
  selector: 'app-host-parent',
  templateUrl: './host-parent.component.html',
  styleUrls: ['./host-parent.component.css'],
  providers: [{ provide: FlowerService, useValue: { emoji: '🌺' } }]

})
export class HostParentComponent {

  constructor(public flower: FlowerService) { }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
