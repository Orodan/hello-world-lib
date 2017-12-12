import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  ],
  imports: [
    FormsModule
  ]
})
export class HelloWorldModule {}
