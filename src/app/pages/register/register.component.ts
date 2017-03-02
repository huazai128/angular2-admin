import { Component } from "@angular/core";
import { FormGroup,FormBuilder,AbstractControl,Validators } from "@angular/forms";
import { EmailValidator,EqualValidator } from "../../theme/validators";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


import "style-loader!./register.scss";

@Component({
  selector:"app-register",
  templateUrl:"./register.html"
})
export class RegisterComponent{
  public form:FormGroup;
  public email:AbstractControl;
  public name:AbstractControl;
  public password:AbstractControl;
  public rePassword:AbstractControl;
  public passwords:FormGroup;
  public submitted:boolean = false;

  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      "name":["",Validators.compose([Validators.required,Validators.maxLength(4)])],
      "email":["",Validators.compose([Validators.required,EmailValidator.validate])],
      "passwords":this.fb.group({
        "password":["",Validators.compose([Validators.required,Validators.maxLength(6)])],
        "rePassword":["",Validators.compose([Validators.required,Validators.maxLength(6)])]
      },{validator:EqualValidator.validate("password","rePassword")})
    });
    this.name = this.form.controls["name"];
    this.email = this.form.controls["email"];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.rePassword = this.passwords.controls['rePassword'];
  }

  //验证email是否注册
  public validEmail(value:string):void{
    //通过验证猜想后台请求
    if(this.form.controls["email"].valid){

    }
  }

  //验证name是否存在
  public validName(value:string):void{
    if(this.form.controls["name"].valid){

    }
  }

  //注册
  register(data:Object):void{
    this.submitted = true;
    if(this.form.valid){
      //注册请求
    }
  }

}
