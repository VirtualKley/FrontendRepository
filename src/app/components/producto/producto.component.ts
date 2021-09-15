import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/Producto';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(public SProducto: ProductoService, private route: Router) { }

  ngOnInit(): void {
    this.SProducto.getProducto();
  }

  goProducto(id?: number){
    this.route.navigate(['/producto', id]);
  }

  deleteProducto(producto: Producto)
  {
    if (confirm("Esta seguro que desea eliminar el producto: " + producto.descripcion))
    {
      this.SProducto.deleteProducto(producto.id!).subscribe( x => {
        this.SProducto.getProducto();
      });
    }
  }

}
