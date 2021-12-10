import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http : HttpClient) { }

  getAllCandidates(){
    return this.http.get(`${environment.apiUrl}/candidates`)
   
  }
}
