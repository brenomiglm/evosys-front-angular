import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-editarfun',
  templateUrl: './editarfun.component.html',
  styleUrls: ['./editarfun.component.css']
})
export class EditarfunComponent implements OnInit{

  btnAcao: string = 'Modificar'
  btnTitulo: string = 'Modificar Funcionário'
  funcionario!: Funcionario;


  constructor(private funcionarioService : FuncionarioService, private route : ActivatedRoute, private router : Router){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.GetFuncionario(id).subscribe((data) => {
      this.funcionario = data;
      
    })
  }

  editarFuncionario(funcionario: Funcionario) {
    console.log(funcionario);
    this.funcionarioService.EditarFuncionario(funcionario).subscribe((data) => {
    this.router.navigate(['/funcionarios']);
    }, (error) => {
      if (error.error && error.error.errors) {
        const errorMessages = Object.entries(error.error.errors)
          .flatMap(([key, msgs]) =>
            Array.isArray(msgs) ? msgs.map(msg => `${key}: ${msg}`) : []
          );
        alert(errorMessages.join(','));
      }
    })
  }

}
