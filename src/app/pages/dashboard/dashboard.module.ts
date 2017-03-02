import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { routing } from "./dashboard.router";
import { NgaModule } from "../../theme/nga.module";  //可以看做公用module

//组件
import { DashBoards } from "./dashboard.component";
import { PieChart } from "./pieChart"

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations:[
    DashBoards,
    PieChart
  ]
})
export class DashboardModule{

}


