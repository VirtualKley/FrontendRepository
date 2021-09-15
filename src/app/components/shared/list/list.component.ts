import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Marca } from 'src/app/models/Marca';
import { MarcaService } from 'src/app/services/marca/marca.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() Service!: any; //Servicio correspondiente a cada componente
  @Output() elemento = new EventEmitter(); //Enviara el elemento para la eliminacion
  @Output() edit = new EventEmitter(); //Enviara la data para la modificacion

  constructor() { }

  ngOnInit(): void {
    
  }

  public goItem(object: Object)
  {
    this.edit.emit(object);
  }

  public deleteItem(object: Object)
  {
    this.elemento.emit(object);
  }

}
