import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help/help.component';

@NgModule({
  imports: [
    HelpRoutingModule
  ],
  declarations: [
    HelpComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelpModule {}
