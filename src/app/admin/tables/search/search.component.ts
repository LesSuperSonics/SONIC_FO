import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
  })
  export class SearchComponent implements OnInit {

    disableFirstNameSelect = new FormControl(false);
    disableLastNameSelect = new FormControl(false);
    disablePhoneNumberSelect = new FormControl(false);
    disableEmailSelect = new FormControl(false);
    disableAddressSelect = new FormControl(false);
    disableExpSelect = new FormControl(false);
    disableProfileSelect = new FormControl(false);
    disableCreatedDateSelect = new FormControl(false);
    disableStatusSelect = new FormControl(false);


    constructor() {}
  
    ngOnInit() {
    }
  }
  