import { Component, OnInit, Injectable } from '@angular/core';
import { AppModule } from './app.module';
import { AppRoutingModule } from './app-routing.module';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from './employee';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})


export class AppComponent implements OnInit{

  columndefs: any[] = ['name','code'];
  employee: Employee[] = [];
  public firstDisplayedColumns = ['firstName', 'lastName', 'tNumber'];
  public secondDisplayedColumns = ['employmentStatus', 'employmentDates', 'salary', 'DOB', 'SSN'];
  public dataSource = new MatTableDataSource<Employee>();

  constructor(private employeeApiService: ApiService) {

  }

  ngOnInit() {
    this.getEmployeesInformation();
    
  }

  getEmployeesInformation() {
    this.employeeApiService.getEmployeesInformation().subscribe((res)=>{
      console.log(res);
      this.dataSource.data = res;
    }) 
  }

  title = 'hr-web-app-3';
  opened=false;
}
