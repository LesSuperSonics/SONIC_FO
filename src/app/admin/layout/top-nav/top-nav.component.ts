import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<void>();

  constructor(private readonly router: Router,private tokenStorageService: TokenStorageService) {}

  ngOnInit() {}

  toggleSidebar() {
    this.sideNavToggled.emit();
  }

 // logout function
  logout(): void {
    localStorage.removeItem('isLoggedin');
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
    window.location.reload();
  }
}
