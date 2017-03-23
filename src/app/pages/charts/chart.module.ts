import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgaModule } from "../../theme/nga.module";
import { FormsModule } from "@angular/forms";

import { Chart } from "./chart.component";
import { ChartDemo,ChartistJsService } from "./component";
import { routing } from "./chart.routing";

@NgModule({
  imports:[
    NgaModule,
    CommonModule,
    FormsModule,
    routing
  ],
  declarations:[
    Chart,
    ChartDemo
  ],
  providers:[
    ChartistJsService
  ]
})

export class ChartsModule{}
