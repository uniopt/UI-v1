import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  tasks:Task[] = [
    {id:1,progId:'eplus',name:"ep task1",dumy:'Any text here'},
    {id:2,progId:'eplus',name:"ep task2",dumy:'Any text here'},
    {id:1,progId:'other',name:"o task1",dumy:'Any text here'},
    {id:2,progId:'other',name:"o task2",dumy:'Any text here'},
    {id:1,progId:'ggg',name:"task1",dumy:'Any text here'},
    {id:1,progId:'aaa',name:"task1",dumy:'Any text here'},
    {id:1,progId:'aaa',name:"task2",dumy:'Any text here'},
    {id:1,progId:'bbb',name:"task1",dumy:'Any text here'},
  ]
  addTask(progId:string,tName:string,dumy:string):void{
    let id = Math.max(...this.tasks.map(task => task.id), 0) + 1;
    this.tasks.push({
      id:id,
      progId:progId,
      name:tName,
      dumy:dumy
    });
    this.save();
  }
  deleteNote(task): void {

    // Get the index in the array of the note that was passed in
    let index = this.tasks.indexOf(task);

    // Delete that element of the array and resave the data
    if(index > -1){
      this.tasks.splice(index, 1);
      this.save();
    }

  }
  editTaskName(id,newName){
    this.tasks.find((prog:Task)=>prog.id === id).name = newName;
    this.save();
  }
  getTask(id): Task {
    // Return the note that has an id matching the id passed in
    return this.tasks.find(task => task.id === id);
  }
  save(){}
   /*
  save(): void {
    // Save the current array of notes to storage
    this.storage.set('notes', this.notes);
  }
  */
}
