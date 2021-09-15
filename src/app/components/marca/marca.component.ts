import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/models/Marca';
import { MarcaService } from 'src/app/services/marca/marca.service';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {

  public marca!: Marca;

  constructor(public SMarca: MarcaService) { }

  ngOnInit(): void {
    this.SMarca.getMarca();
  }

  deleteMarca(marca: Marca)
  {
    if(confirm("Esta seguro que desea eliminar el elemento: " + marca.nombre))
    {
       this.SMarca.deleteMarca(marca.id!).subscribe(data => {
         this.SMarca.getMarca();
       });
    }
  }

  public putMarca(marca: Marca)
  {
    this.marca = marca;
  }

  saveMarca(marca: Marca){
    if (marca.id === 0)
    {
      this.SMarca.postMarca(marca).subscribe(x => this.SMarca.getMarca());
    }else
    {
      this.SMarca.putMarca(marca).subscribe(x => this.SMarca.getMarca());
    }
  }

}
