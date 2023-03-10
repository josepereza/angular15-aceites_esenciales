import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  {
    path:'' , redirectTo:'/home',pathMatch:'full'
  },
  { 
    path:'listado', component:ListadoComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'**', redirectTo:'/home',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
