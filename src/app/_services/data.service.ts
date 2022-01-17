import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
export interface CandidateData {
  id: number;
  cin: string;
  passportId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: string;
  expDuration: number;
  profile: string;
  createdDate: string;
  status: string;
  user: string;
  receivedDate: string;
}
export interface StatusData {
  id:number;
  label:string;
  description:string;
}
const GET_API = "http://localhost:8080/api/candidates";
const CSV_API = "http://localhost:8080/api/csv/upload"

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //private param$ = new BehaviorSubject("");; // this param will be modified from Dashboard to show corresponding data on table
  private _param: string = "";
  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenStorageService.getToken()
    })
  };
  getCandidates(): Observable<any> {
    return this.http.get(GET_API + this._param, this.httpOptions);
  }
  /*changeParam(route: string) {
    this.param$.next(route);
  }
  getParam() {
    return this.param$.asObservable();
  }*/
  public set param(param: string) {
    this._param = param;
  }

  public getParam(): string {
    return this._param;
  }
  uploadCsv(formData: FormData): Observable<any> {
    return this.http.post(CSV_API,
      formData,
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.tokenStorageService.getToken()
        })
      })
      ;
  }

}