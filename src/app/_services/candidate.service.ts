import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Candidate } from '../models/candidate';
import { TokenStorageService } from './token-storage.service';




@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  postId: any;
  errorMessage: any;

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

  getCandidateByStatus(status){
    return this.http.get(`${environment.apiUrl}/candidates/findByStatus` + status)

  }

  addCandidate(data : Candidate){
    return this.http.post(`${environment.apiUrl}/candidates`, data)
    .pipe(map((res : any)=>{
      return res;
    }))
  }

  deleteCandidate(id){
    return this.http.delete(`${environment.apiUrl}/candidates` + id)

  }

  updateStatus(id, data : Candidate){
    return this.http.put(`${environment.apiUrl}/candidates/candidate/changeStatus` + id, data)


  }
UpdateStatusOfCandidate(id,newStatus): Observable<any>{
  const body = { status:newStatus };
    return this.http.put(`${environment.apiUrl}/candidates/candidate/changeStatus/` + id, body,this.httpOptions);
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
