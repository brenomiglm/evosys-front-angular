import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/models/departamentos';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar Departamento"
  
  constructor(private departamentoService : DepartamentoService, private router: Router) {
    
  }

  
  createDepartamento(departamento : Departamento) {
    this.departamentoService.CreateDepartamento(departamento).subscribe((data) => {
      this.router.navigate(['/']); 
    });

  }
}
