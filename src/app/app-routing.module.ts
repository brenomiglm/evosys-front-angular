import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CadastrofunComponent } from './pages/cadastrofun/cadastrofun.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from './pages/editar/editar.component';
import { EditarfunComponent } from './pages/editarfun/editarfun.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: '', component: HomeComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'funcionarios/cadastrar', component: CadastrofunComponent },
  { path: 'funcionarios/editar/:id', component: EditarfunComponent },
  { path: 'funcionarios', component: FuncionariosComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
