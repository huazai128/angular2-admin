import { Routes,RouterModule } from "@angular/router";
import { PagesComponent } from　"./pages.component";
import { ModuleWithProviders } from "@angular/core";

export const routes:Routes = [
  {path:"login",loadChildren:"app/pages/login/login.module#LoginModule"}, //懒加载
  {path:"register",loadChildren:"app/pages/register/register.module#RegisterModule"},
  {
    path:"pages",
    component:PagesComponent,
    children:[
      {path:"",redirectTo:"dashboard",pathMatch:"full"},
      {path:"dashboard",loadChildren:"app/pages/dashboard/dashboard.module#DashboardModule"}
    ]

  }
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);


