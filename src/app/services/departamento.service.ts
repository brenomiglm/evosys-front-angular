import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamentos';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private apiUrl = `${environment.ApiUrl}/Departamento`

  constructor(private http: HttpClient) { }

  GetDepartamentos(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(`${this.apiUrl}/todos`);
  }

  GetDepartamento(id: number): Observable<Departamento> {
    return this.http.get<Departamento>(`${this.apiUrl}/obter/${id}`);
  }

  CreateDepartamento(departamento: Departamento): Observable<Departamento[]> {
    return this.http.post<Departamento[]>(`${this.apiUrl}/adicionar`, departamento);
  }
  
  EditarDepartamento(departamento: Departamento): Observable<Departamento[]> {
    return this.http.put <Departamento[]>(`${this.apiUrl}/atualizar/${departamento.id}`, departamento);
  }

  ExcluirDepartamento(id : number): Observable<any> {
    return this.http.delete <Departamento[]>(`${this.apiUrl}/excluir/${id}`);
  }


}
