import { Routes,RouterModule } from "@angular/router";

import { AppUi } from "./ui.component";
import { Modals } from "./component";

const routes:Routes = [
  {
    path:"",
    component:AppUi,
    children:[
      {path:"modals",component:Modals}
    ]
  }
]

export const routing = RouterModule.forChild(routes);
