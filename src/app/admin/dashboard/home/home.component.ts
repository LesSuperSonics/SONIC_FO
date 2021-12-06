import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';
interface Place {
  imgSrc: string;
  name: string;
  description: string;
  charge: string;
  location: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  places: Array<Place> = [];
  content?: string;
  constructor(private userService: UserService) {}
  ngOnInit() {
    // give access to the scope with authorized resource to use later with users roles 
    /*this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );*/
    
  }
}
