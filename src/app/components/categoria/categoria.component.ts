import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  public categoria!: Categoria;

  constructor(public SCategoria: CategoriaService) { }

  ngOnInit(): void {
    this.SCategoria.getCategoria();
  }

  public deleteCategoria(categoria: Categoria)
  {
    if(confirm("Esta seguro que desea eliminar el elemento: " + categoria.nombre))
    {
       this.SCategoria.deleteCategoria(categoria.id!).subscribe(data => {
         this.SCategoria.getCategoria();
       });
    }
  }

  public putCategoria(categoria: Categoria)
  {
    this.categoria = categoria;
  }

  public saveCategoria(categoria: Categoria){
    if (categoria.id === 0)
    {
      this.SCategoria.postCategoria(categoria).subscribe(x => this.SCategoria.getCategoria());
    }else
    {
      this.SCategoria.putCategoria(categoria).subscribe(x => this.SCategoria.getCategoria());
    }
  }

}
