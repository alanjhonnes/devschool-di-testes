import { Component, Self, Optional } from '@angular/core';
import { LeafService } from '../../services/leaf.service';

@Component({
  selector: 'app-self-no-data',
  templateUrl: './self-no-data.component.html',
  styleUrls: ['./self-no-data.component.css']
})
export class SelfNoDataComponent {
  constructor(@Self() @Optional() public leaf?: LeafService) { }
}


// The app doesn't break because the value being available at self is optional.
// If you remove @Optional(), the app breaks.



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
