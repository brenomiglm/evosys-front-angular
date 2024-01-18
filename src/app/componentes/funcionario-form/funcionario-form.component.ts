import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Departamento } from 'src/app/models/departamentos';
import { Funcionario } from 'src/app/models/funcionario';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Funcionario>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosFuncionario: Funcionario | null = null;

  
  FuncionarioForm!: FormGroup;
  Departamentos: Departamento[] = []

 constructor(private departamentoService : DepartamentoService, private currentRoute: ActivatedRoute){} 
  gerarLinkFoto(id?: number):string {
    return environment.ApiUrl + `/funcionario/verfoto/${id}`
  }
  ngOnInit(): void {
  this.departamentoService.GetDepartamentos().subscribe(data => {
      this.Departamentos = data;
  }, (error) => {
    if (error.error && error.error.errors) {
      const errorMessages = Object.entries(error.error.errors)
        .flatMap(([key, msgs]) => 
          Array.isArray(msgs) ? msgs.map(msg => `${key}: ${msg}`) : []
        );
      alert(errorMessages.join(','));
    }
  }); 
    this.FuncionarioForm = new FormGroup({
      id: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.id : 0),
      nome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.nome : '', [Validators.required]),
      foto: new FormControl(null),
      rg: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.rg : '', [Validators.required]),
      departamentoId: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.departamentoId?.toString() : '',[Validators.required]),
    })
  }
  onFileSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.FuncionarioForm.patchValue({ foto: fileList[0] })

    }
  }

  submit() {
    this.onSubmit.emit(this.FuncionarioForm.value);
 }

}
