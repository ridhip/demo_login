import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private router:Router){}

  username:string;
  password:string;

    hide = true;

  username1 = new FormControl('', [Validators.required]);
  password1=new FormControl('',[Validators.required]);

  getErrorMessage() {
    return this.username1.hasError('required') ? 'You must enter username' :'';
    
    
  }
  getErrorMessage1() {
    
    return this.password1.hasError('required') ? 'You must enter password' :'';
    
  }

 login():void{
  if(this.username == 'admin' && this.password == 'admin'){
    this.router.navigate(["dashboard"]);
   }else {
     alert("Invalid credentials");
   }
  }
}
