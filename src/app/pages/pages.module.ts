import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesComponent } from "./pages.component";
import { routing }from "./pages.router";
import { NgaModule } from "../theme/nga.module";  //各个Module中的使用前都必须引用



@NgModule({
  imports:[
    CommonModule,
    NgaModule,
    routing

  ],
  declarations:[
    PagesComponent
  ]
})

export class PagesModule{

}
