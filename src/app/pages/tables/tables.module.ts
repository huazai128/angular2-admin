import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgaModule } from "../../theme/nga.module";
import { FormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { SmartTable } from "./component/smartTable";
import { Tables } from "./tables.component";

import { SmartTableServer } from "./component/smartTable/smartTable.server";

import { routing } from "./tables.routing";


@NgModule({
  imports:[
    CommonModule,
    NgaModule,
    FormsModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations:[
    Tables,
    SmartTable
  ],
  providers:[
    SmartTableServer
  ]
})

export class TablesModule{

}
