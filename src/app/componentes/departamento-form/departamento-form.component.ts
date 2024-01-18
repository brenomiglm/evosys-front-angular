import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Departamento } from 'src/app/models/departamentos';

@Component({
  selector: 'app-departamento-form',
  templateUrl: './departamento-form.component.html',
  styleUrls: ['./departamento-form.component.css']
})
export class DepartamentoFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Departamento>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosDepartamento: Departamento | null = null;

DepartamentoForm!: FormGroup;

  constructor(){}
  
  ngOnInit(): void {

    this.DepartamentoForm = new FormGroup({
    id: new FormControl(this.dadosDepartamento ? this.dadosDepartamento.id : 0),
    Nome: new FormControl(this.dadosDepartamento ? this.dadosDepartamento.nome : '', [Validators.required]),
    Sigla: new FormControl(this.dadosDepartamento ? this.dadosDepartamento.sigla : '',[Validators.required])
  })
}
  
  submit() {
    this.onSubmit.emit(this.DepartamentoForm.value);
 }

}
