import {  Component, ElementRef, OnInit, QueryList, ViewChildren } from "@angular/core";
import { MatCheckboxChange } from "@angular/material/checkbox";

declare function disable(): any;
declare function enable(): any;
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
  })
 
  export class SearchComponent implements OnInit {
    constructor() {}
    arr1 = ["First Name","Last Name","Profile","CIN","Passeport ID","Email","Phone Number"];
    arr2: any= [];

    @ViewChildren('someInput') someInput: QueryList<ElementRef>;

    ngOnInit() {
    }

    onChange(ob: MatCheckboxChange) {
      console.log("is checked "+ob.source.id +" "+ob.checked);
    }

    
    onCheckboxChecked(event: { disabled: any,checked: any; }, element: any) {
      if (event.checked) {
        this.arr2.push(element);
      } else {
        let index = this.arr2.indexOf(element);
        if (index > -1) {
          this.arr2.splice(index, 1);
        }
      }
      console.log(JSON.stringify(this.arr2));
      if (this.arr2.includes('First Name') && this.arr2.includes('Last Name')) {
        disable();
        enable();
      }
    }

    

    
    
  }


  