import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
@Input() task:Task;
isEditable: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  onEnableEditing(){
    this.isEditable=true;
  }
  onSave(newName){
    this.task.name  = newName;
    this.isEditable = false;
  }
  onDeleteTask(){
    console.log("Task Deleted");
  }

}
