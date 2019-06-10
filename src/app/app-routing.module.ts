import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes :  Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
