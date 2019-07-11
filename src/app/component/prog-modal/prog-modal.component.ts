import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProgService } from '../../sevice/prog.service';

@Component({
  selector: 'app-prog-modal',
  templateUrl: './prog-modal.component.html',
  styleUrls: ['./prog-modal.component.css']
})
export class ProgModalComponent implements OnInit {
  @Output() onProgrameChange : EventEmitter<string> = new EventEmitter<string>();
  programes ;
 
  constructor(private progService:ProgService){ }

  ngOnInit() {
    this.programes = this.progService.programes;
  }
  activeProg(id:string,status:string){
    this.progService.activeProg(id,status);
  }
  onSave(){
    this.onProgrameChange.emit();
    
  }

}
