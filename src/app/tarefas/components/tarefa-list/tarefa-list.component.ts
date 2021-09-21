import { Component, Input, OnInit } from '@angular/core';

import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-tarefa-list',
  templateUrl: './tarefa-list.component.html',
  styleUrls: ['./tarefa-list.component.css'],
  providers: [MessageService]
 
})
export class TarefaListComponent implements OnInit {
  
 formTarefa: any;

 tarefas: any=[];

 feito: boolean = false;

 constructor(private messageService: MessageService) { }

  ngOnInit() { }

   
 criarTarefa(){
  this.tarefas.push(this.formTarefa);
  this.formTarefa='';
  
} 
showSuccess() {
  this.messageService.add({severity:'success', summary: 'Success', detail: 'Tarefa gravada!'});
}


removerTarefa(item:any){
this.tarefas.splice(this.tarefas.indexOf(item), 1);

}


} 






 