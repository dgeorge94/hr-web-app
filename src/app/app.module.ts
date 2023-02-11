import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './shared/login/login.component';
import { ManageComponent } from './manage/manage.component';
import { SearchComponent } from './search/search.component';
import { NewUserComponent } from './manage/new-user.component';
import { CustomMaterialModule } from './shared/custom.material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpHandler, HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';



@Injectable({
  providedIn: 'root', useClass: HttpClient
})


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
