import { Component, OnInit } from '@angular/core';
import { FlowerService } from 'src/app/shared/services/flower.service';
import { LeafService } from 'src/app/shared/services/leaf.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.scss']
})
export class DiComponent {

  constructor(public flower: FlowerService, public leaf: LeafService) {}
}
