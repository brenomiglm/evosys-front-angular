import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../services/departamento.service';
import { Departamento } from '../../models/departamentos';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Funcao() {
throw new Error('Method not implemented.');
}

  departamentos: Departamento[] = [];
  departamentoGeral: Departamento[] = [];
  Id: any; 

  constructor(private departamentoService: DepartamentoService) { }

  ngOnInit(): void {
    this.departamentoService.GetDepartamentos().subscribe(data => {
      this.departamentos = data;
      console.log(this.departamentos);

      this.departamentos.map((item) => {
        console.log(item)
      })
      
       this.departamentoGeral = data;

    });
  }

 search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.trim().toLocaleLowerCase();

    this.departamentos = this.departamentoGeral.filter(departamento => {
        return departamento.nome.toLocaleLowerCase().startsWith(value);
    });
 }
  
  deletar(id: number) {
    if (confirm("Tem certeza que deseja exluir?")) {
      this.departamentoService.ExcluirDepartamento(id).subscribe(data => {
        this.ngOnInit();
      })
    }
  }
}
