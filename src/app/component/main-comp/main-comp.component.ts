import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgService } from 'src/app/sevice/prog.service';
import { TaskService } from 'src/app/sevice/task.service';
import { Prog } from 'src/app/model/prog';
// import * as fs from 'fs';
import { Task } from 'src/app/model/task';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements OnInit {
 programes:Prog[];
 progId;
 programe:Prog;
 taskId;
 task:Task;
 
  constructor(private route:ActivatedRoute,private progService:ProgService,private taskService:TaskService,private http:HttpClient){}
  arr=[];
  ngOnInit() {
  //   fs.readFile('test.txt', (err, data) => {
  //     if (err) throw err;
  //   //  this.arr = JSON.parse(data);
  //   console.log(data);
    
  // });
  
    this.route.params.subscribe( params => {
        this.progId = params['prog'];
        this.taskId = parseInt(params['taskId']);
        this.prepareData();
        
      }

  )
   
    
  }
  prepareData(){
    this.programes = this.progService.programes;
   this.programe = this.programes.find(prog => prog.id === this.progId);
   this.task = this.taskService.tasks.find(task => task.progId === this.progId  && task.id === this.taskId  )
   console.log("tid",this.task);
   
  }

}
