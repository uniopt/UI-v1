import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProgService } from './sevice/prog.service';
import { Prog } from './model/prog';
import { TaskService } from './sevice/task.service';
import { Task } from './model/task';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
    constructor(private progService:ProgService,private taskService:TaskService){}

   ngOnInit(){
    this.getprogrames();
    this.specifyCurrentProg('eplus');
    this.specifyCurrentTasksArray();
   }
 //Sart Programe col logic
  activeProgrames:Prog[];
  getprogrames(){
    this.activeProgrames =  this.progService.programes.filter(prog => prog.canBeActive === true);
    // console.log('get');
    // console.log(this.activeProgrames);
    
  }

  //Sart tasks col logic
  programeId = 'eplus'
  programeTitle='Energy Plus';
  specifyCurrentProg(id:string){
    if(!id)
       id = this.programeId;
    this.programeTitle=this.activeProgrames.find(el=>el.id===id).name;
    this.programeId = id;
    console.log(id);
    this.specifyCurrentTasksArray();
  }
  onAddTask(el:HTMLInputElement){
   // addTask(progId:string,tName:string,dumy:string)
    this.taskService.addTask(this.programeId,el.value,'');
    this.specifyCurrentTasksArray();
    el.value = ''
  }
  tasks:Task[]=[];
  specifyCurrentTasksArray(){
    this.tasks = this.taskService.tasks.filter(task => task.progId === this.programeId);
    console.log(this.tasks);
    
  }

 

 
 /* constructor(private http:HttpClient){
    this.http.get('http://127.0.0.1:3000/').subscribe(res =>{
      console.log(res);
      this.tasks = res;
    });
    this.http.get('http://127.0.0.1:3333/?id=1&name=abdo').subscribe(res =>{
      console.log(res);
      this.quiry = res;
    });
  }*/
 
 
}
