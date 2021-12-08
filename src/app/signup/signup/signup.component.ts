import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: any = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmPassword: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  firstnameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20)
  ]);
  lastnameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20)
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  confirmPasswordFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.firstnameFormControl.invalid &&
      !this.lastnameFormControl.invalid &&
      !this.emailFormControl.invalid &&
      !this.passwordFormControl.invalid &&
      !this.confirmPasswordFormControl.invalid) {
      const { firstName, lastName, email, password } = this.form;
      this.authService.register(firstName, lastName, email, password).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['/login']);
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    }
  }
  onLogin() {
    this.router.navigate(['/login']);
  }

  onConfirmPasswordChange() {
    if (this.form.password === this.form.confirmPassword) {
      this.confirmPasswordFormControl.setErrors(null);
    }
    else {
      this.confirmPasswordFormControl.setErrors({ match: true })
    }
  }
}