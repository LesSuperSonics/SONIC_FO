import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';
import { ChartService } from 'src/app/_services/chart.service';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit ,AfterViewInit{
  pieChartLabels: string[] = ['FullStack', 'SalesForce', 'Testing'];
  pieChartData=[];
  pieChartType = 'pie';
  constructor(private chartService :ChartService) {}
  colors: Color[] = [
    {
      backgroundColor: [
        '#07226d',
        '#2caec5',
        '#737978'
      ]
    }
  ];
  ngOnInit() {
    this.onPieChartFullStackCall();
    this.onPieSalesForceCall();
    this.onPieChartTestingCall();
  }
  chartClicked(e: any): void {
    console.log(e.active);
    console.log(e.event);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
  // Pie Chart values functions
  onPieChartFullStackCall() {
    this.chartService.PieChartFullStackCountCall().subscribe(
      data => {
        this.pieChartData.push(JSON.parse(JSON.stringify(data))['Total_FullStack']);
        console.log("FullStack -->"+JSON.parse(JSON.stringify(data))['Total_FullStack']);
      },
      err => {
        console.log("error");
      }
    );
  }

  onPieSalesForceCall() {
    this.chartService.PieChartSalesForceCountCall().subscribe(
      data => {
        this.pieChartData.push(JSON.parse(JSON.stringify(data))['Total_SalesForce']);
        console.log("SalesForce -->"+JSON.parse(JSON.stringify(data))['Total_SalesForce']);
      },
      err => {
        console.log("error");
      }
    );
  }

  onPieChartTestingCall() {
    this.chartService.PieChartTestingCountCall().subscribe(
      data => {
        this.pieChartData.push(JSON.parse(JSON.stringify(data))['Total_Testing']);
        console.log("Testing -->"+JSON.parse(JSON.stringify(data))['Total_Testing']);
      },
      err => {
        console.log("error");
      }
    );
  }


  ngAfterViewInit(){
  }


}
