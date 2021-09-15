import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { MarcaComponent } from './components/marca/marca.component';
import { ProductoFormComponent } from './components/producto/producto-form/producto-form.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';

const routes: Routes = [
  {
    path: '',
    component: ProductoComponent
  },
  {
    path: 'producto/:id',
    component: ProductoFormComponent
  },
  {
    path: 'producto',
    component: ProductoFormComponent
  },
  {
    path: 'categoria',
    component: CategoriaComponent
  },
  {
    path: 'marca',
    component: MarcaComponent
  },
  {
    path: 'proveedor',
    component: ProveedorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
