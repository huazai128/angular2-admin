import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core'; //模板提供商

export const routes: Routes = [
  { path: '', redirectTo:"pages", pathMatch:"full"},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes/*, { useHash: true }*/);
