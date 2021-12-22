import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
let component: LoginComponent;
let fixture: ComponentFixture<LoginComponent>;
let h2: HTMLElement;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [ LoginComponent ],
  });
  fixture = TestBed.createComponent(LoginComponent);
  component = fixture.componentInstance; // LoginComponent test instance
  h2 = fixture.nativeElement.querySelector('h2');
});
});