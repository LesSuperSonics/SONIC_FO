import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogBoxRoutingModule } from './dialog-box-routing.module';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@NgModule({
  imports: [
    DialogBoxRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DialogBoxComponent
  ],
  declarations: [
    DialogBoxComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DialogBoxModule {}
