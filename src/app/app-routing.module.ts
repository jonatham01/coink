import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { LoginComponent } from './components/login/login.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'buscador',
    component:BuscadorComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
