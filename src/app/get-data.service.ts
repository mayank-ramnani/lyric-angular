import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private http: HttpClient) {}
  auth_token = environment.apiKey;
  console_print(somedata: string) {
    console.log(somedata);
  }
  console_http(searchText: string): Observable<any> {
    return this.http.get(`https://api.genius.com/search?q=${encodeURIComponent(searchText)}+&access_token=${this.auth_token}`);
  }
}
