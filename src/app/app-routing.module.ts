import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './shared/login/login.component';
import { ManageComponent } from './manage/manage.component';
import { SearchComponent } from './search/search.component';
import { NewUserComponent } from './manage/new-user.component';
import { CustomMaterialModule } from './shared/custom.material.module';
import { EmployeeComponent } from './employee/employee.component';







const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent }, 
  { path: 'manage', component: ManageComponent },
  { path: 'search', component: SearchComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'new-user', component: NewUserComponent}

]

@NgModule({
  

  imports: [
    
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    CustomMaterialModule
  ],

  
  exports: [RouterModule],
 
  
})
export class AppRoutingModule { }