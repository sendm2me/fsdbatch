import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeGridComponent } from './employee-grid/employee-grid.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeService } from 'app/service/employee.service';


const appRoutes: Routes=[
{path:'',component:EmployeeGridComponent},
{path:'add',component:EmployeeFormComponent},
{path:'edit/:id',component:EmployeeFormComponent},
{path:'del/:id',component:EmployeeDeleteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeGridComponent,
    EmployeeFormComponent,
    EmployeeDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
