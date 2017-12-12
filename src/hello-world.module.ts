import { NgModule } from '@angular/core';

import { HelloWorldInputComponent } from './hello-world-input.component';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [
    HelloWorldComponent,
    HelloWorldInputComponent
  ],
  exports: [
    HelloWorldComponent,
    HelloWorldInputComponent
  ]
})
export class HelloWorldModule {}
