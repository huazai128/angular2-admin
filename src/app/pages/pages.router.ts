import { Routes,RouterModule } from "@angular/router";
import { PagesComponent } from　"./pages.component";
import { ModuleWithProviders } from "@angular/core";

export const routes:Routes = [
  {path:"pages",component:PagesComponent},
  {path:"login",loadChildren:"app/pages/login/login.module#LoginModule"} //懒加载
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);

