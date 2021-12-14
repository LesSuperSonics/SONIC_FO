import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Candidate } from '../models/candidate';
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
  



}
