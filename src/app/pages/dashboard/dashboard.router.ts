import { Routes,RouterModule } from "@angular/router";
import { DashBoards } from "./dashboard.component";

const routes:Routes =[
  {path:"",component:DashBoards}
]

export const routing = RouterModule.forChild(routes);

