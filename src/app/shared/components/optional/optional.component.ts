import { Component, Optional } from '@angular/core';
import { OptionalService } from '../../services/optional.service';

@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.css']
})

export class OptionalComponent {
  constructor(@Optional() public optional?: OptionalService) {}
}

// The OptionalService isn't provided here, in the @Injectable()
// providers array, or in the NgModule. If you remove @Optional()
// from the constructor, you'll get an error.





/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
