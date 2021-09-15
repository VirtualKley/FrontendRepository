import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/Producto';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { MarcaService } from 'src/app/services/marca/marca.service';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  form = new FormGroup({});
  id: number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, public SCategoria: CategoriaService, public SMarca: MarcaService, public SProveedor: ProveedorService, public SProducto: ProductoService) {
    this.form = this.formBuilder.group({
      descripcion: new FormControl('', [Validators.required]),
      categoria: new FormControl(0, [Validators.required]),
      proveedor: new FormControl(0, [Validators.required]),
      marca: new FormControl(0, [Validators.required]),
      medidas: new FormControl('', [Validators.required]),
      precio_unitario: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.SCategoria.getCategoria();
    this.SMarca.getMarca();
    this.SProveedor.getProveedor();
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
      if (this.id > 0)
      {
        this.SProducto.gProducto(this.id).toPromise().then(data => {
          this.form.patchValue({
            descripcion: data.descripcion,
            categoria: data.categoria_id,
            proveedor: data.proveedor_id,
            marca: data.marca_id,
            medidas: data.medidas,
            precio_unitario: data.precio_unitario
          });
        });
      }
    });
  }

  guardarProducto()
  {
    if (this.id == 0)
    {
      this.SProducto.postProducto(this.guardar()).subscribe(x =>{
        this.SProducto.getProducto();
      });
    }else
    {
      this.SProducto.putProducto(this.id, this.guardar()).subscribe(x => {
        this.SProducto.getProducto();
      });
    }
    this.router.navigate(["/"]);
  }

  private guardar()
  {
    const producto: Producto = {
      descripcion: this.form.get('descripcion')?.value,
      categoria_id: parseInt(this.form.get('categoria')?.value),
      marca_id: parseInt(this.form.get('marca')?.value),
      proveedor_id: parseInt(this.form.get('proveedor')?.value),
      medidas: this.form.get('medidas')?.value,
      precio_unitario: this.form.get('precio_unitario')?.value
    };
    if(this.id > 0)
    {
      producto.id = this.id;
    }
    return producto;
  }

}
