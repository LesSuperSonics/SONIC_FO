

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Status } from '../models/status';
import { TokenStorageService } from './token-storage.service';




@Injectable({
    providedIn: 'root'
})
export class StatusService {

    constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.tokenStorageService.getToken()
        })
    };

    getAllStatuses() {
        return this.http.get(`${environment.apiUrl}/status`)
    }
    getStatusbyId(id){
        return this.http.get(`${environment.apiUrl}/status/` + id)
    }
    addStatus(data: Status){
        return this.http.post(`${environment.apiUrl}/status`, data)
        .pipe(map((res: any) => {
            return res;
        }))
    }
    deleteStatus(id) {
        return this.http.delete(`${environment.apiUrl}/status/` + id)
    }
    updateStatus(id,data: Status){
        return this.http.put(`${environment.apiUrl}/status/`+id, data)
        .pipe(map((res: any) => {
            return res;
        }))
    }
    getStatusCount(id){
        return this.http.get(`${environment.apiUrl}/status/get_status_count/` + id)
    }
}
