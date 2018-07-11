import { Component, OnInit } from '@angular/core';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'app/model/employee';
import { EmployeeService } from 'app/service/employee.service';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  private emp:Employee;
  private canDelete:boolean;
  constructor(private empSer:EmployeeService,
  private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      params=>{
        if(params['id']!=null){
          this.empSer.getEmployeeById(params['id']).subscribe(
            (data)=>{this.emp=data;
              this.canDelete=true;
            }          
          );
        }else{
          this.emp=null;
          this.canDelete=false;
        }
      }
    );
  }

  deleteEmployee(){
    this.empSer.delEmployee(this.emp.empId).subscribe(
      (response)=>{
        if(response.ok){
          alert('deletion successfull');          
        }else{
          alert('deletion failed!');
        }
        this.router.navigate(["/"]);
      }
    );
  }


}
