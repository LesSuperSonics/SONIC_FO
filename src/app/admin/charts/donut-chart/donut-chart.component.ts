import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';
import { ChartService } from 'src/app/_services/chart.service';
@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {
  doughnutChartLabels: string[] = [
    'Current',
    'Accepted',
    'Rejected'
  ];
  doughnutChartData = [];
  doughnutChartType = 'doughnut';
  colors: Color[] = [
    {
      backgroundColor: [
        '#ffa726',
        '#66bb6a',
        '#ff0000'
      ]
    }
  ];
  constructor(private chartService:ChartService) {}

  ngOnInit() {
    this.onDonutChartCurrentCall();
    this.onDonutChartAcceptedCall();
    this.onDonutChartRejectedCall();
  }
  chartClicked(e: any): void {
    console.log(e.active);
    console.log(e.event);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
   // Donut Chart values functions
   onDonutChartCurrentCall() {
    this.chartService.DonutChartCurrentCountCall().subscribe(
      data => {
        this.doughnutChartData.push(JSON.parse(JSON.stringify(data))['Total_Current']);
        console.log(JSON.parse(JSON.stringify(data))['Total_Current']);
      },
      err => {
        console.log("error");
      }
    );
  }
  onDonutChartAcceptedCall() {
    this.chartService.DonutChartAcceptedCountCall().subscribe(
      data => {
        this.doughnutChartData.push(JSON.parse(JSON.stringify(data))['Total_Accepted']);
        console.log(JSON.parse(JSON.stringify(data))['Total_Current']);
      },
      err => {
        console.log("error");
      }
    );
  }
  onDonutChartRejectedCall() {
    this.chartService.DonutChartRejectedCountCall().subscribe(
      data => {
        this.doughnutChartData.push(JSON.parse(JSON.stringify(data))['Total_Rejected']);
        console.log(JSON.parse(JSON.stringify(data))['Total_Current']);
      },
      err => {
        console.log("error");
      }
    );
  }
}
