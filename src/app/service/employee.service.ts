
import { Injectable } from '@angular/core';
import {Employee} from '../model/employee';
import {Http,Response, RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '../../environments/environment';

@Injectable(
)
export class EmployeeService {

  private empUrl=environment.baseEmpUrl;
private httpOptions:RequestOptions;
  constructor(private http:Http) {
let headers=new Headers({'content-Type':'application/json'});
this.httpOptions=new RequestOptions({headers:headers});

   }

    getEmployees(): Observable<Employee[]>{
      return this.http.get(this.empUrl).pipe(
        map((resp:Response) => <Employee[]>resp.json())      
      );
    }

    getUrlById(empId: number) :string{
        return this.empUrl + "/" +empId;
    }

    getEmployeeById(empId:number) :Observable<Employee>{
      return this.http.get(this.getUrlById(empId)).pipe(
        map((resp:Response) => <Employee>resp.json())        
      );
    }

    addEmployee(emp:Employee): Observable<Employee>{
      return this.http.post(this.empUrl,JSON.stringify(emp),this.httpOptions).pipe(
        map((resp:Response)=><Employee>resp.json())
      );
    }

    delEmployee(empId:number){
      return this.http.delete(this.getUrlById(empId)).pipe(
        map((resp:Response)=>resp)
      );
    }

    updateEmployee(emp:Employee):Observable<Employee>{
      return this.http.put(this.getUrlById(emp.empId),JSON.stringify(emp),this.httpOptions).pipe(
        map((resp:Response)=><Employee>resp.json())
      );
    }

}
