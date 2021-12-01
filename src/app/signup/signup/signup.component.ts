import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  onSignup() {
    localStorage.setItem('isSignedUp', 'true');
    localStorage.setItem('isLoggedin', 'true');
    console.log("on onSignup()")
    this.router.navigate(['/dashboard']);
  }
  onLogin(){
    this.router.navigate(['/login']);
  }
}