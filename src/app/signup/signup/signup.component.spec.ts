import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
let component: SignupComponent;
let fixture: ComponentFixture<SignupComponent>;
let h2: HTMLElement;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [ SignupComponent ],
  });
  fixture = TestBed.createComponent(SignupComponent);
  component = fixture.componentInstance; // SignupComponent test instance
  h2 = fixture.nativeElement.querySelector('h2');
});
});