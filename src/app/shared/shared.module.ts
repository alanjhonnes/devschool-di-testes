import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostComponent } from './components/host/host.component';
import { HostChildComponent } from './components/host-child/host-child.component';
import { HostParentComponent } from './components/host-parent/host-parent.component';
import { OptionalComponent } from './components/optional/optional.component';
import { SelfComponent } from './components/self/self.component';
import { SelfNoDataComponent } from './components/self-no-data/self-no-data.component';
import { SkipselfComponent } from './components/skipself/skipself.component';
import { FLOWER_SERVICE_TOKEN } from './injection-tokens/flower-service.token';
import { FlowerService } from './services/flower.service';



@NgModule({
  declarations: [
    HostComponent,
    HostChildComponent,
    HostParentComponent,
    OptionalComponent,
    SelfComponent,
    SelfNoDataComponent,
    SkipselfComponent,
  ],
  exports: [
    HostComponent,
    HostChildComponent,
    HostParentComponent,
    OptionalComponent,
    SelfComponent,
    SelfNoDataComponent,
    SkipselfComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: FLOWER_SERVICE_TOKEN,
      useValue: {
        emoji: 'Flor'
      } as FlowerService,
    },
    {
      provide: FlowerService,
      useClass: FlowerService,
    },
  ]
})
export class SharedModule { }
