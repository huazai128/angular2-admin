import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalModule } from "ng2-bootstrap";
import { FormsModule } from "@angular/forms"

import { NgaModule } from "../../theme/nga.module";
import { routing } from "./ui.routing"

import { AppUi } from "./ui.component";
import { Modals } from "./component";


@NgModule({
  imports:[
    CommonModule,
    NgaModule,
    FormsModule,
    ModalModule.forRoot(),
    routing
  ],
  declarations:[
    AppUi,
    Modals
  ],
  providers:[

  ]
})

export class UiModule{

}
