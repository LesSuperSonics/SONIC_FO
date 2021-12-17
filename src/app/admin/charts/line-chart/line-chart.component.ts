import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/_services/chart.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  tab:number[]=[];
  lineChartData: Array<any> = [
    { data: [], label: 'Candidates' }
  ];
  lineChartLabels: Array<any> = [
  ];
  lineChartOptions: any = {
    responsive: true
  };
  lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  lineChartLegend = true;
  lineChartType = 'line';
  constructor(private chartService:ChartService) {}

  ngOnInit() {
    this.onTimeLineChartCallCall();
  }
  chartClicked(e: any): void {
    console.log(e.active);
    console.log(e.event);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
   // Pie Chart values functions
   onTimeLineChartCallCall() {
    this.chartService.TimeLineChartCall().subscribe(
      res => {
        res.forEach(element => {
          this.lineChartData[0].data.push(element[0]);
          this.lineChartLabels.push(""+element[1]);
        });
      },
      err => {
        console.log("error");
      }
    );
  }
}
