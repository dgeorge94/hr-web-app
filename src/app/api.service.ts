import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment';
import { AppModule } from './app.module';

@Injectable({
  providedIn: 'root', useClass: ApiService,
  
  
})



export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getEmployeesInformation(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${environment.baseURL}employees.json`);
  }



}
