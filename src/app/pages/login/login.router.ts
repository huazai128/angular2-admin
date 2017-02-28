import { Routes,RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core";  //模块提供商;是一个接口，提供了ngModule和provides

import { LoginComponent } from "./login.component"

const routes:Routes = [
  {path:"",component:LoginComponent}
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);
