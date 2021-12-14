import { query } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { EmailValidator, FormControl } from "@angular/forms";
import { SearchService } from "src/app/_services/search.service";
import { TokenStorageService } from "src/app/_services/token-storage.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  form: any = {
    firstName: null,
    lastName: null,
    email: null,
    phoneNumber: null,
    exp: null,
    status: null
  };
  disableFirstNameSelect = new FormControl(false);
  disableLastNameSelect = new FormControl(false);
  disablePhoneNumberSelect = new FormControl(false);
  disableEmailSelect = new FormControl(false);
  disableExpSelect = new FormControl(false);
  disableStatusSelect = new FormControl(false);

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onSearch() {
    this.searchService.sendQueryToTable(this.getQuery());
  }
  getQuery(): string {
    var query = "";
    if (this.disableFirstNameSelect.value && !(this.form.firstName == null) && !(this.form.firstName == "")) {
      query += "firstName:" + this.form.firstName + " AND ";
    }
    if (this.disableLastNameSelect.value && !(this.form.lastName == null) && !(this.form.lastName == "")) {
      query += "lastName:" + this.form.lastName + " AND ";
    }
    if (this.disableEmailSelect.value && !(this.form.email == null) && !(this.form.email == "")) {
      query += "email:" + this.form.email + " AND ";
    }
    if (this.disablePhoneNumberSelect.value && !(this.form.phoneNumber == null) && !(this.form.phoneNumber == "")) {
      query += "phoneNumber:" + this.form.phoneNumber + " AND ";
    }
    if (this.disableExpSelect.value && !(this.form.exp == null)) {
      query += "expDuration:" + this.form.exp + " AND ";
    }
    /*if (this.disableStatusSelect.value && !(this.form.status == null)) {
      query+="status:"+this.form.status+" AND ";
    }*/ // enum issue
    return query;
  }
}
