import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/models/departamentos';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  btnAcao: string = 'Modificar'
  btnTitulo: string = 'Modificar Departamento'
  departamento!: Departamento;

  constructor(private departamentoServices : DepartamentoService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(1)


    this.departamentoServices.GetDepartamento(id).subscribe((data) => {
      this.departamento = data
    console.log(2)
    })
  }

  editarDepartamento(departamento: Departamento) {
    console.log(departamento);
    this.departamentoServices.EditarDepartamento(departamento).subscribe((data) => {
      this.router.navigate(['/']);
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

