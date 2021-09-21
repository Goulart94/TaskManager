import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaListComponent } from './tarefas/components/tarefa-list/tarefa-list.component';

const routes: Routes = [
  
   //{ path:'', component: TarefaListComponent},
   {path: 'tarefa', component: TarefaListComponent},
  
  
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
