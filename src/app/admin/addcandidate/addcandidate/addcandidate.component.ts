import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Candidate } from 'src/app/models/candidate';
import { CandidateService } from 'src/app/_services/candidate.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';


/** Error when invalid control is dirty, touched, or submitted. */

class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
/*
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
*/


@Component({
  selector: 'app-addcandidate',
  templateUrl: './addcandidate.component.html',
  styleUrls: ['./addcandidate.component.scss']
})
export class AddCandidateComponent implements OnInit {

  constructor(private datePipe : DatePipe, private router: Router, private candidatService : CandidateService,  private formBuilder : FormBuilder) {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[- +()0-9]+')
    ]);

  matcher = new MyErrorStateMatcher();


  candidateForm !: FormGroup;
  candidate : Candidate = new Candidate();

  ngOnInit() : void {
   this.candidateForm = this.formBuilder.group({
    cin : [''],
    passportId : [''],
    firstName: [''],
    lastName: [''],
    phoneNumber: [''],
    email: [''],
    address: [''],
    expDuration: null,
    profile: [''],
    receivedDate : null
    
   })
  }

  persistCandidate(){

    this.candidate.cin = this.candidateForm.value.cin;
    this.candidate.passportId = this.candidateForm.value.passportId;
    this.candidate.firstName = this.candidateForm.value.firstName;
    this.candidate.lastName = this.candidateForm.value.lastName;
    this.candidate.email = this.candidateForm.value.email;
    this.candidate.phoneNumber = this.candidateForm.value.phoneNumber;
    this.candidate.address = this.candidateForm.value.address;
    this.candidate.expDuration = this.candidateForm.value.expDuration;
    this.candidate.profile = this.candidateForm.value.profile;
    this.candidate.receivedDate = this.convert(this.candidateForm.value.receivedDate)  ;

    console.log(this.candidate.receivedDate +" "+this.candidate.email);
    this.candidatService.addCandidate(this.candidate)
    .subscribe((res : Candidate) => {
      console.log(res);
      alert("candidate added successfuly");
      this.router.navigate(['/tables']);
    },
    err=>{
      alert("something went wrong")
    })
  }

   convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth,date.getFullYear()].join("/");
  }
  /*
  constructor(private candidatService : CandidateService) {}
   candidates : Candidate[];

   ngOnInit(): void {}
  
   persistCandidate(data: Candidate) {
    this.candidatService.addCandidate(data)
        .subscribe((res: Candidate) => this.candidates = [res, ...this.candidates])
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

*/

  
  /*
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[- +()0-9]+')
    ]);

  matcher = new MyErrorStateMatcher();

  constructor(private candidatService : CandidateService, private formBuilder : FormBuilder) {}

  candidateForm !: FormGroup;
  candidate : Candidate = new Candidate();

  ngOnInit() : void {
   this.candidateForm = this.formBuilder.group({
    cin : [''],
    passportId : [''],
    firstName: [''],
    lastName: [''],
    phoneNumber: [''],
    email: [''],
    address: [''],
    expDuration: null,
    profile: [''],
    receivedDate : null
    
   })
  }

   */
  
  //candidates : Candidate[];
 


/*
  persistCandidate(){

    this.candidate.cin = this.candidateForm.value.cin;
    this.candidate.passportId = this.candidateForm.value.passportId;
    this.candidate.firstName = this.candidateForm.value.firstName;
    this.candidate.lastName = this.candidateForm.value.lastName;
    this.candidate.email = this.candidateForm.value.email;
    this.candidate.phoneNumber = this.candidateForm.value.phoneNumber;
    this.candidate.address = this.candidateForm.value.address;
    this.candidate.expDuration = this.candidateForm.value.expDuration;
    this.candidate.profile = this.candidateForm.value.profile;
    this.candidate.receivedDate = this.candidateForm.value.receivedDate;

    this.candidatService.addCandidate(this.candidate)
    .subscribe((res : Candidate) => {
      console.log(res);
      alert("candidate added successfuly");
    },
    err=>{
      alert("something went wrong")
    })
  }

  */

   /*
    this.candidatService.addCandidate(this.candidatesForm)
    .subscribe((res : Candidate) => {
      this.candidates = [res, ...this.candidates]
    })
  }
  */
  /*
  persistCandidate(data : Candidate){
    this.candidatService.addCandidate(data)
      .subscribe((res : Candidate) => this.candidates = [res, ...this.candidates])
  }
  */
 
}
