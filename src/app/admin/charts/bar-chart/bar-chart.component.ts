import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/_services/chart.service';
import { TokenStorageService } from "src/app/_services/token-storage.service";
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  FullStackResult: any;
  SalesForceResult: any;
  TestingResult: any;
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels: string[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012'
  ];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'FullStack' },
    { data: [100, 25, 78, 33, 86, 12, 43], label: 'Testing' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'SalesForce' }
  ];
  constructor(private chartService:ChartService) {}

  ngOnInit() {
    this.onBarChartFullStackByYearsCall();
    this.onBarChartSalesForceByYearsCall();
    this.onBarChartTestingByYearsCall();
  }

  chartClicked(e: any): void {
    console.log(e.active);
    console.log(e.event);
  }

  chartHovered(e: any): void {
    console.log(e);
  }

  onBarChartFullStackByYearsCall() {
      this.chartService.BarChartFullStackByYearsCall().subscribe(
        data => {
         this.FullStackResult= JSON.parse(JSON.stringify(data));
          //console.log(JSON.stringify(data));
        },
        err => {
          console.log("error");
        }
      );
    }

    onBarChartSalesForceByYearsCall() {
      this.chartService.BarChartSalesForceByYearsCall().subscribe(
        data => {
          return JSON.parse(JSON.stringify(data));
          //console.log(JSON.stringify(data));
        },
        err => {
          console.log("error");
        }
      );
    }
    onBarChartTestingByYearsCall() {
      this.chartService.BarChartTestingByYearsCall().subscribe(
        data => {
          return JSON.parse(JSON.stringify(data));
          //console.log(JSON.stringify(data));
        },
        err => {
          console.log("error");
        }
      );
    }
/*
    this.FullStackResult.forEach(element => {
      console.log(element[0]);
    });
    
*/
    
     
     
    
  
}
