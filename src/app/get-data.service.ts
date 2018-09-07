import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private http: HttpClient) {}
  auth_token = '1xBb7_o63f2aMFNvg0Wz0GmwEYmAlf8vFr2U2mIL9Ea-RFWbSnoEc3WtdNK8WGyS';
  console_print(somedata: string) {
    console.log(somedata);
  }
  console_http(searchText: string): Observable<any> {
    return this.http.get(`https://api.genius.com/search?q=${encodeURIComponent(searchText)}+&access_token=${this.auth_token}`);
  }
}
