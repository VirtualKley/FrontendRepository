import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { MarcaComponent } from './components/marca/marca.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { CategoriaService } from './services/categoria/categoria.service';
import { MarcaService } from './services/marca/marca.service';
import { ProductoService } from './services/producto/producto.service';
import { ProveedorService } from './services/proveedor/proveedor.service';
import { ProductoFormComponent } from './components/producto/producto-form/producto-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/shared/list/list.component';
import { FormComponent } from './components/shared/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriaComponent,
    MarcaComponent,
    ProductoComponent,
    ProveedorComponent,
    ProductoFormComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CategoriaService,
    MarcaService,
    ProductoService,
    ProveedorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
