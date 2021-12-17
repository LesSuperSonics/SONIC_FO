import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { environment } from 'src/environments/environment';

// Bar Chart routes
let BarChartFullstackByYears = "FullStackByYearsBarChart";
let BarChartSalesForceByYears = "SalesForceByYearsBarChart";
let BarChartTestingByYears = "TestingByYearsBarChart";
// Pie Chart routes 
let PieChartFullstack = "fullstackCount";
let PieChartSalesForce = "testingCount";
let PieChartTesting = "salesforceCount";
// Donut Chart routes 
let DonutChartCurrent = "CurrentStatusCount";
let DonutChartAccepted = "AcceptedStatusCount";
let DonutChartRejected = "RejectedStatusCount";
// TimeLine Chart route
let TimeLineChart = "CandidatesByYearsTimeLineChart";
let SubRootUrl = "/candidates/"
@Injectable({
    providedIn: 'root'
})
export class ChartService {
    constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.tokenStorageService.getToken()
        })
    };
    // Bar Chart count of Candidates profiles by Years 
    BarChartFullStackByYearsCall(): Observable<any> {
        return this.http.get(`${environment.apiUrl}`+SubRootUrl+BarChartFullstackByYears, this.httpOptions);
    }
    BarChartSalesForceByYearsCall(): Observable<any> {
        return this.http.get(`${environment.apiUrl}`+SubRootUrl+BarChartSalesForceByYears, this.httpOptions);
    }
    BarChartTestingByYearsCall(): Observable<any> {
        return this.http.get(`${environment.apiUrl}`+SubRootUrl+BarChartTestingByYears, this.httpOptions);
    }
    // Pie Chart profiles rations  
    PieChartFullStackCountCall(): Observable<any> {
        return this.http.get(`${environment.apiUrl}`+SubRootUrl+PieChartFullstack, this.httpOptions);
    }
    PieChartTestingCountCall(): Observable<any> {
        return this.http.get(`${environment.apiUrl}`+SubRootUrl+PieChartSalesForce, this.httpOptions);
    }
    PieChartSalesForceCountCall(): Observable<any> {
        return this.http.get(`${environment.apiUrl}`+SubRootUrl+PieChartTesting, this.httpOptions);
    }
    // Donut Chart profiles rations  
    DonutChartCurrentCountCall(): Observable<any> {
        return this.http.get(`${environment.apiUrl}`+SubRootUrl+DonutChartCurrent, this.httpOptions);
    }
    DonutChartAcceptedCountCall(): Observable<any> {
        return this.http.get(`${environment.apiUrl}`+SubRootUrl+DonutChartAccepted, this.httpOptions);
    }
    DonutChartRejectedCountCall(): Observable<any> {
        return this.http.get(`${environment.apiUrl}`+SubRootUrl+DonutChartRejected, this.httpOptions);
    }
    // TimeLine Chart candidates  
    TimeLineChartCall(): Observable<any> {
        return this.http.get(`${environment.apiUrl}`+SubRootUrl+TimeLineChart, this.httpOptions);
    }
}
