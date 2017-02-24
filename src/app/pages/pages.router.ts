import { Routes,RouterModule } from "@angular/router";
import { PagesComponent } from　"./pages.component";
import { ModuleWithProviders } from "@angular/core"


export const routes:Routes = [
  {path:"pages",component:PagesComponent}
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);

