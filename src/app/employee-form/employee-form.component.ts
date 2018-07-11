import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'app/service/employee.service';
import { Employee } from 'app/model/employee';
import { Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  private emp:Employee;
  private dojStr:string;
  private isNew:boolean;
  constructor(private empSer:EmployeeService, private router:Router,
     private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params=>{
        if(params['id']!=null){            
          this.empSer.getEmployeeById(params['id']).subscribe(
            (data)=>{this.emp=data;}
          );          
          this.isNew=false;          
        }else{
          this.emp=new Employee();
          this.isNew=true;
        }
      }
    );
    //this.emp=new Employee();
   this.dojStr=(new Date()).toISOString().substr(0,10);
  }

updateDoj(){
this.emp.dateOfJoining=new Date(this.dojStr);

}


saveEmployee(){
    if(this.isNew){

      this.empSer.addEmployee(this.emp).subscribe(
        (data)=>{  
          alert(data.empId+ "is added successfully");
          this.router.navigate(["/"]);
        }
      );

    }else{
      this.empSer.updateEmployee(this.emp).subscribe(
        (data)=>{  
          alert(data.empId+ "is updated successfully");
          this.router.navigate(["/"]);
        }
      );
    }  
}

}
