import { Routes,RouterModule } from "@angular/router";
import { Chart } from "./chart.component";
import { ChartDemo } from "./component"

const routes:Routes = [
  {
    path:"",
    component:Chart,
    children:[
      {path:"chartist-js",component:ChartDemo}
    ]
  }
]


export const routing = RouterModule.forChild(routes);
