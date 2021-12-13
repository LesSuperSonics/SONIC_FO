import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const SEARCH_API = 'http://localhost:8080/api/candidates?search=';



@Injectable({
    providedIn: 'root'
})
export class SearchService {
    constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.tokenStorageService.getToken()
        })
    };
    search(query: string): Observable<any> {
        console.log("in search service with httpOptions: "+ JSON.stringify(this.httpOptions));
        return this.http.get(SEARCH_API + query, this.httpOptions);
    }
}
