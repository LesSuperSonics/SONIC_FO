import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';




@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http : HttpClient,  private tokenStorageService: TokenStorageService) { }

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenStorageService.getToken()
    })
};


  getAllCandidates(){
    return this.http.get(`${environment.apiUrl}/candidates`)
   
  }

// profiles

  getFullStack(){
    return this.http.get(`${environment.apiUrl}/candidates/fullstackCount`)
  }

  getTesting(){
    return this.http.get(`${environment.apiUrl}/candidates/testingCount`)
  }

  getSaleForce(){
    return this.http.get(`${environment.apiUrl}/candidates/salesforceCount`)
  }

  // Status

  getAccepted(){
    return this.http.get(`${environment.apiUrl}/candidates/AcceptedStatusCount`)
  }

  getCurrent(){
    return this.http.get(`${environment.apiUrl}/candidates/CurrentStatusCount`)
  }

  getRejected(){
    return this.http.get(`${environment.apiUrl}/candidates/RejectedStatusCount`)
  }


}
