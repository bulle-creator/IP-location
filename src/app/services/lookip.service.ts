import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LookipService {

  constructor(private http: HttpClient) { }

    public sendGetRequest(IP: string){
      return this.http.get(environment.apiBaseUrl + IP);
  }
}