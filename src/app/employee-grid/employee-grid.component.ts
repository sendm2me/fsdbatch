import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee';
import { EmployeeService } from 'app/service/employee.service';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.css']
})
export class EmployeeGridComponent implements OnInit {

  emps:Employee[];
  constructor(private empService:EmployeeService) { }

  ngOnInit() {

    this.empService.getEmployees().subscribe(
      (empData)=>this.emps=empData
    
    )
  }

}
