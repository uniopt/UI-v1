import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-tasks-col',
  templateUrl: './tasks-col.component.html',
  styleUrls: ['./tasks-col.component.css']
})
export class TasksColComponent implements OnInit {
@Input() tasks:Task[];
  constructor() { }
 
  ngOnInit() {
  }

}
