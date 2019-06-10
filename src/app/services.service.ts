import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './modal/patient.modal';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(public http:HttpClient) { }

  getUserDetails(){
    return this.http.get("http://localhost:3000/users")
                .toPromise()
                .then(res => <Patient[]> res)
                .then(data => { return data; });
  }
}
