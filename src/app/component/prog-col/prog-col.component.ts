import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { ProgService } from '../../sevice/prog.service';

@Component({
  selector: 'app-prog-col',
  templateUrl: './prog-col.component.html',
  styleUrls: ['./prog-col.component.css']
})
export class ProgColComponent implements OnInit {
 @Input() programes ;
 @Output() onProgrameChange : EventEmitter<string> = new EventEmitter<string>();
 currentProgrameId = 'eplus';

  constructor(private progService:ProgService){ }

  ngOnInit() {
    console.log('col',this.programes);
    
  }

  specifyCurrentProg(id:string){
    this.currentProgrameId = id;
    this.onProgrameChange.emit(id);
  }


}
