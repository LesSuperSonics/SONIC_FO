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
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



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

@Component({
  selector: 'app-addcandidate',
  templateUrl: './addcandidate.component.html',
  styleUrls: ['./addcandidate.component.scss']
})
export class AddCandidateComponent implements OnInit {

 
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[- +()0-9]+')
    ]);

  matcher = new MyErrorStateMatcher();

  constructor( private toastr : ToastrService, private datePipe : DatePipe, private router: Router, private candidatService : CandidateService,  private formBuilder : FormBuilder) {}

  candidateForm !: FormGroup;
  candidate : Candidate = new Candidate();

  ngOnInit() : void {
   this.candidateForm = this.formBuilder.group({
    cin : [''],
    passportId : [''],
    firstName: [''],
    lastName: [''],
    phoneNumber: this.phoneFormControl,
    email: this.emailFormControl,
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
      this.toastr.success(
        `the Candidate has a current status`,
          'Candidate added successfuly',
        {
          timeOut : 3000,
          positionClass: 'toast-bottom-left'
        }
      );
      this.router.navigate(['/tables']);
    },
    err=>{
      this.toastr.error(
        `Erreur`,
        'Merci de Vérifier la console',
        {
          timeOut: 3000,
          positionClass: 'toast-bottom-left'
        }
      )
    })
  }

   convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth,date.getFullYear()].join("/");
  }
 
 
  
 
}
