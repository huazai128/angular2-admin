import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { NgaModule } from "../../theme/nga.module"

import { LoginComponent } from "./login.component";
import { routing } from "./login.router";

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    routing
  ],
  declarations:[
    LoginComponent
  ]
})

export class LoginModule{}
