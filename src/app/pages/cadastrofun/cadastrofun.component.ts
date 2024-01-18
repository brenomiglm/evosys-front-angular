import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastrofun',
  templateUrl: './cadastrofun.component.html',
  styleUrls: ['./cadastrofun.component.css']
})
export class CadastrofunComponent {

  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar Funcionario"

  constructor(private funcionarioService: FuncionarioService, private router:Router) {
  
}



  createFuncionario(funcionario:Funcionario) {
    this.funcionarioService.CreateFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/funcionarios'])
    }, (error) => {
      if (error.error && error.error.errors) {
        const errorMessages = Object.entries(error.error.errors)
          .flatMap(([key, msgs]) =>
            Array.isArray(msgs) ? msgs.map(msg => `${key}: ${msg}`) : []
          );
        alert(errorMessages.join(','));
      }
    });
  }
}

