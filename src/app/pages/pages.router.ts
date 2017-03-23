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
      {path:"dashboard",loadChildren:"app/pages/dashboard/dashboard.module#DashboardModule"},
      {path:"editors",loadChildren:"app/pages/editors/editors.module#EditorsModule"},
      {path:"charts",loadChildren:"app/pages/charts/chart.module#ChartsModule"},
      {path:"ui",loadChildren:"app/pages/ui/ui.module#UiModule"},
      {path:"tables",loadChildren:"app/pages/tables/tables.module#TablesModule"}
    ]
  }
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);


