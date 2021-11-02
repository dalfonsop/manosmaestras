import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ListadoserviciosComponent } from './components/listadoservicios/listadoservicios.component';
import { LoginComponent } from './components/login/login.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';

const routes: Routes = [
  { path: 'proveedor', component: ProveedorComponent },
  //{ path: 'cliente', component: ClienteComponent },
  //{ path: 'servicios', component:  ListadoserviciosComponent},
  //{ path: '', component:  LoginComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
