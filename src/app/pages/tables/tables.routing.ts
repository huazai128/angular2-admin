import { Routes,RouterModule } from "@angular/router";
import { Tables } from "./tables.component";
import { SmartTable } from "./component/smartTable"

const routes:Routes = [
  {
    path:"",
    component:Tables,
    children:[
      {path:"smart",component:SmartTable}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
