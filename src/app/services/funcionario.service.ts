import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl = `${environment.ApiUrl}/Funcionario`

  constructor(private http: HttpClient){ }

  GetFuncionarios(id?: number) : Observable <Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.apiUrl}/Todos${(id ? `?departamentoId=${(id)}`:"")}`);

  }

  GetFuncionario(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.apiUrl}/obter/${id}`);
  }

  EditarFuncionario(funcionario: Funcionario): Observable<Funcionario[]> {
    const formData: FormData = new FormData();

    formData.append('id', funcionario.id ? funcionario.id.toString() : '0');
    formData.append('nome', funcionario.nome);
    formData.append('rg', funcionario.rg);
    formData.append('foto', funcionario.foto);
    formData.append('departamentoid', funcionario.departamentoId ? funcionario.departamentoId.toString() : '0');


    return this.http.put<Funcionario[]>(`${this.apiUrl}/atualizar/${funcionario.id}`, formData);
  }

  CreateFuncionario(funcionario: Funcionario): Observable<Funcionario[]> {
    const formData: FormData = new FormData();

    formData.append('id', funcionario.id ? funcionario.id.toString() : '0');
    formData.append('nome', funcionario.nome);
    formData.append('rg', funcionario.rg);
    console.log(funcionario.foto)
    formData.append('foto', funcionario.foto);
    formData.append('departamentoid', funcionario.departamentoId ? funcionario.departamentoId.toString() : '0');

    const httpOptions = {
      headers: new HttpHeaders({

      })
    };

    return this.http.post<Funcionario[]>(`${this.apiUrl}/adicionar`, formData, httpOptions);
  }

    ExcluirFuncionario(id : number): Observable<any> {
    return this.http.delete <Funcionario[]>(`${this.apiUrl}/excluir/${id}`);
  }


}
