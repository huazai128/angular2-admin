import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { routing } from "./dashboard.router";
import { NgaModule } from "../../theme/nga.module";  //可以看做公用module

//组件和数据服务
import { DashBoards } from "./dashboard.component";
import { PieChart,PieChartService } from "./pieChart";
import { TrafficChart,TrafficChartSerivce} from "./trafficChart";
import { UserMap,UserMapService } from "./userMap"


@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations:[
    DashBoards,
    PieChart,
    TrafficChart,
    UserMap
  ],
  providers:[
    PieChartService,
    TrafficChartSerivce,
    UserMapService
  ]
})


export class DashboardModule{

}


