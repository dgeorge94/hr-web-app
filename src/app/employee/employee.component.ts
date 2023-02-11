import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../employee';
import { ApiService } from '../api.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html',
    animations: [
        trigger('detailExpand', [
          state('collapsed', style({height: '0px', minHeight: '0'})),
          state('expanded', style({height: '*'})),
          transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
      ],
})


export class EmployeeComponent implements OnInit{

  columndefs: any[] = ['name','code'];
  employee: Employee[] = [];
  public displayedColumns = ['firstName', 'lastName', 'tNumber', 'employmentStatus', 'employmentDates', 'salary', 'DOB', 'SSN'];
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

  
}
