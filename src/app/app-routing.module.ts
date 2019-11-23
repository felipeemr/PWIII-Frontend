import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEditoraComponent } from './lista-editora/lista-editora.component';
import { NovoEditoraComponent } from './novo-editora/novo-editora.component';

const routes: Routes = [
  {path: 'listagem', component: ListaEditoraComponent},
  {path: 'novo', component: NovoEditoraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
