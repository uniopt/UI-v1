import { Injectable } from '@angular/core';
import { Prog } from '../model/prog';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProgService {
  mainUrl = '../../assets/data/';
   private _programes:Prog[]=[
    {id:'eplus',name:'Energy Plus',canBeActive:true},
    {id:'other',name:'Energy minus',canBeActive:true},
    {id:'ggg',name:'Energy any',canBeActive:true},
    {id:'aaa',name:'Energy any2',canBeActive:false},
    {id:'bbb',name:'Energy any3',canBeActive:false},
 ]
  constructor(private http:HttpClient) {

   }
  get programes(){
  return this._programes;
  //return this.http.get(this.mainUrl+'programes.json');
  }

  activeProg(id:string,status:string){
  this._programes.find((prog:Prog)=>prog.id===id).canBeActive= (status == 'active') ? true : false;
  this.save();
  }
  save(){}
}
