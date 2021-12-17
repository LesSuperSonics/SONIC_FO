import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/_services/candidate.service';
import { UserService } from '../../../_services/user.service';
import { DataService } from 'src/app/_services/data.service';

interface Place {
  imgSrc: string;
  name: string;
  description: string;
  charge: string;
  location: string;
}

const FULLSTACKS = "/findFullStacks";
const TESTING = "/findTestings";
const SALESFORCE = "/findSalesForces";
const STATUS_CURRENT = "/findByStatus/CURRENT";
const STATUS_ACCEPTED = "/findByStatus/ACCEPTED";
const STATUS_REJECTED = "/findByStatus/REJECTED";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countFS: number = 0;
  labelFS: string = "";

  countTS: number = 0;
  labelTS: string = "";

  countSF: number = 0;
  labelSF: string = "";

  countCR: number = 0;
  labelCR: string = "";

  countAC: number = 0;
  labelAC: string = "";

  countRJ: number = 0;
  labelRJ: string = "";

  places: Array<Place> = [];
  content?: string;
  constructor(private router: Router, private candidateService: CandidateService, private dataService: DataService) { }

  ngOnInit() {
    this.getFullStack();
    this.getTesting();
    this.getSalesForce();

    this.getCurrent();
    this.getAccepted();
    this.getRejected();
  }

  getFullStack() {
    this.candidateService.getFullStack().subscribe(
      res => {
        this.labelFS = "FullStack",
          this.countFS = JSON.parse(JSON.stringify(res))['Total_FullStack']
        //console.log(this.label + this.count)
      });
  }

  getTesting() {
    this.candidateService.getTesting().subscribe(
      res => {
        this.labelTS = "Testing",
          this.countTS = JSON.parse(JSON.stringify(res))['Total_Testing']

      });
  }

  getSalesForce() {
    this.candidateService.getSaleForce().subscribe(
      res => {
        this.labelSF = "SalesForce",
          this.countSF = JSON.parse(JSON.stringify(res))['Total_SalesForce']

      });
  }

  getCurrent() {
    this.candidateService.getCurrent().subscribe(
      res => {
        this.labelCR = "Current",
          this.countCR = JSON.parse(JSON.stringify(res))['Total_Current']
      });

  }


  getAccepted() {
    this.candidateService.getAccepted().subscribe(
      res => {
        this.labelAC = "Accepted",
          this.countAC = JSON.parse(JSON.stringify(res))['Total_Accepted']
      });

  }

  getRejected() {
    this.candidateService.getRejected().subscribe(
      res => {
        this.labelRJ = "Rejected",
          this.countRJ = JSON.parse(JSON.stringify(res))['Total_Rejected']
      });

  }


  // give access to the scope with authorized resource to use later with users roles 
  /*this.userService.getAdminBoard().subscribe(
    data => {
      this.content = data;
    },
    err => {
      this.content = JSON.parse(err.error).message;
    }
  );*/

  onViewDetailsClicked(label) {
    switch (label) {
      case "FullStack": {
        this.dataService.param=FULLSTACKS;
        break;
      }
      case "Testing": {
        this.dataService.param=TESTING;
        break;
      }
      case "SalesForce": {
        this.dataService.param=SALESFORCE;

        break;
      }
      case "Current": {
        this.dataService.param=STATUS_CURRENT;

        break;
      }
      case "Accepted": {
        this.dataService.param=STATUS_ACCEPTED;

        break;
      }
      case "Rejected": {
        this.dataService.param=STATUS_REJECTED;
        break;
      }
    }
    this.router.navigate(["/tables"]);
  }
}
