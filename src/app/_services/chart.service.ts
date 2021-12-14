import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { environment } from 'src/environments/environment';

let BarChartFullstackByYears = "FullStackByYearsBarChart";
let BarChartSalesForceByYears = "SalesForceByYearsBarChart";
let BarChartTestingByYears = "TestingByYearsBarChart";
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
    BarChartFullStackByYearsCall(): Observable<any> {
        return this.http.get(`${environment.apiUrl}`+SubRootUrl+BarChartFullstackByYears, this.httpOptions);
    }
    BarChartSalesForceByYearsCall(): Observable<any> {
        return this.http.get(`${environment.apiUrl}`+SubRootUrl+BarChartSalesForceByYears, this.httpOptions);
    }
    BarChartTestingByYearsCall(): Observable<any> {
        return this.http.get(`${environment.apiUrl}`+SubRootUrl+BarChartTestingByYears, this.httpOptions);
    }
}
