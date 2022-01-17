import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addcandidate',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  action: string;
  count:number;
  local_data: any;

  labelFormControl = new FormControl('', [
    Validators.required
  ]);
  descriptionFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { label: string; description: string;count?:number}) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
    this.count=data.count;
    console.log(data);
  }
  doAction() {
    if((!this.labelFormControl.invalid && !this.descriptionFormControl.invalid) || this.action=="Delete"){
      this.dialogRef.close({ event: this.action, data: this.local_data });
    }
  }
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  ngOnInit(): void {
  }
}
