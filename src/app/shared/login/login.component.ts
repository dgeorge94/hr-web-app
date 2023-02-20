import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';




@Component({
    selector: 'login',
    templateUrl: './login.component.html',
  
})



export class LoginComponent{

    loginOnSubmit(form: NgForm) {
        console.log(form)
    }
    

}


