import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() data: any
  @Input() title: string = '';
  @Output() sendData = new EventEmitter();

  form = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required])
    });
    this.reseteoVar();
  }

  ngOnChanges(): void{
      this.setMarca()
  }

  private reseteoVar()
  {
    this.data = {
      id: 0,
      nombre: ''
    };
  }

  public setMarca(){
    this.form.patchValue({
      nombre: this.data?.nombre
    });
  }

  public enviarInfo()
  {
    this.data.nombre = this.form.get('nombre')?.value;
    this.sendData.emit(this.data);
    this.reseteoVar();
    this.form.reset();
  }

}
