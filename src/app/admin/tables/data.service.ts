import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
const GET_API = "http://localhost:8080/api/candidates";

@Injectable()
export class DataService {
  param = ""; // this param will be modified from Dashboard to show corresponding data on table
  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenStorageService.getToken()
    })
  };
  getCandidatesBy(param: string): Observable<any> {
    return this.http.get(GET_API + param, this.httpOptions);
  }
}