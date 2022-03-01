import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyFinTechDataService {
  constructor(private http: HttpClient) { }

  public getFinData(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/db2329a8ffcb415ea92d4803dce10625`);
  }
}
