import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
Funcao() {
throw new Error('Method not implemented.');
}

  funcionarios: Funcionario[] = [];
  funcionarioGeral: Funcionario[] = [];
  
  constructor( private FuncionarioService: FuncionarioService, private route:ActivatedRoute){}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
    this.FuncionarioService.GetFuncionarios(params['departamentoId'] || null).subscribe(data => {
      this.funcionarios = data;          
      this.funcionarioGeral = data;     
    });
    
    })
    
  }

 search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.trim().toLocaleLowerCase();

    this.funcionarios = this.funcionarioGeral.filter(funcionario=> {
        return funcionario.nome.toLocaleLowerCase().startsWith(value);
    });
 }
  

  deletar(id: number) {
    if (confirm("Tem certeza que deseja exluir?")) {
      this.FuncionarioService.ExcluirFuncionario(id).subscribe(data => {
        this.ngOnInit();
      })
    }
  }
  
}
