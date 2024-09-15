import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { personal  } from '../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class apipersonalService {

  private url = 'https://66e3abe0d2405277ed117d41.mockapi.io/Company';
 

  constructor(private http: HttpClient) {}


  getAll(): Observable<personal[]> {
    return this.http.get <personal[]>(this.url);
  }




  getpersonal(): Observable<any[]> { 
    return this.http.get<any[]>(this.url);
  }

  getdescripcionById(id:number): Observable<any> { 
    return this.http.get<any>(`${this.url}/${id}`);
}

}