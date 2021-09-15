import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/Proveedor';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  public proveedor!: Proveedor;

  constructor(public SProveedor: ProveedorService) { }

  ngOnInit(): void {
    this.SProveedor.getProveedor();
  }

  public deleteProveedor(proveedor: Proveedor)
  {
    if(confirm("Esta seguro que desea eliminar el elemento: " + proveedor.nombre))
    {
       this.SProveedor.deleteProveedor(proveedor.id!).subscribe(data => {
         this.SProveedor.getProveedor();
       });
    }
  }

  public putProveedor(proveedor: Proveedor)
  {
    this.proveedor = proveedor;
  }

  public saveProveedor(proveedor: Proveedor){
    if (proveedor.id === 0)
    {
      this.SProveedor.postProveedor(proveedor).subscribe(x => this.SProveedor.getProveedor());
    }else
    {
      this.SProveedor.putProveedor(proveedor).subscribe(x => this.SProveedor.getProveedor());
    }
  }

}
