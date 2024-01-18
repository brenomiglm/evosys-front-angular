import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DepartamentoFormComponent } from './componentes/departamento-form/departamento-form.component';
import { EditarComponent } from './pages/editar/editar.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { CadastrofunComponent } from './pages/cadastrofun/cadastrofun.component';
import { FuncionarioFormComponent } from './componentes/funcionario-form/funcionario-form.component';
import { EditarfunComponent } from './pages/editarfun/editarfun.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    DepartamentoFormComponent,
    EditarComponent,
    FuncionariosComponent,
    CadastrofunComponent,
    FuncionarioFormComponent,
    EditarfunComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
