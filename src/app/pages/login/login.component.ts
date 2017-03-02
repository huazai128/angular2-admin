import { Component } from "@angular/core";
import { FormGroup,AbstractControl,FormBuilder,Validators } from "@angular/forms";  //form表单的相关组件


/**
 * AbstractControl:提供了所有控件和控件组所具有的一些共享行为
 */

import "style-loader!./login.scss";

@Component({
  selector:"app-login",
  templateUrl:"./login.html"
})

export class LoginComponent{
  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      "email":["",Validators.compose([Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
      "password":["",Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(26)])]
    });
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public login():void{
    this.submitted = true;
    if(this.form.valid){

    }
  }
}
