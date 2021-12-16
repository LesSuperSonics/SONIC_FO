import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/models/profile';
import { CandidateService } from 'src/app/_services/candidate.service';



@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  @Input() bgClass: string;
  @Input() id : number;
  @Input() icon: string;
  @Input() profile : Profile;
  @Input() count: number;
  @Input() label: string;
  @Input() data: number;
  @Output() viewDetails = new EventEmitter<string>();


  constructor(private router : Router, private candidateService : CandidateService) {}

  profiles : Profile;

  ngOnInit() {
    //this.getFullStack();
    //this.getTesting();
  }

  viewDetailsClick(){
    this.viewDetails.emit(this.label);
  }

/*
  getFullStack(){
    this.candidateService.getFullStack().subscribe((res : Profile) =>{
      this.profiles = res,
      console.log(res)
    })
    }
    

    getFullStack(){
      this.candidateService.getFullStack().subscribe(
        res => {
          this.label = "FullStack",
          this.count = JSON.parse(JSON.stringify(res))['Total_FullStack'],
          console.log(this.label + this.count)
        });
      }

      getTesting(){
        this.candidateService.getTesting().subscribe(
          res => {
            this.label = "Testing",
            this.count = JSON.parse(JSON.stringify(res))['Total_Testing'],
            console.log(this.label + this.count)
          });
        }

      getSalesForce(){
        this.candidateService.getSaleForce().subscribe(
          res => {
            this.label = "SalesForce",
            this.count = JSON.parse(JSON.stringify(res))['Total_SalesForce'],
            console.log(this.label + this.count)
          });
      }

*/

}
