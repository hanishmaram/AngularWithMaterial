import { TrainingService } from './../training.service';
import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { MatDialog } from '@angular/material';

import {StopTrainingComponent} from './stop-training.component'

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  progress=0;
  timer:number;
   @Output() trainingExit=new EventEmitter<void>();

  constructor(private dialog:MatDialog,private trainingService:TrainingService) { }

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer(){
    const step=this.trainingService.getRunningExercise().duration/100*1000;
    this.timer=setInterval(()=>{
      this.progress=this.progress+1;
      if(this.progress>=100){
        clearInterval(this.timer);
      }
    },step);
  }

  onStop(){
    clearInterval(this.timer);
    const dialogRef=this.dialog.open(StopTrainingComponent,{
      data:{
        progress:this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
          this.trainingExit.emit();
      }else{
        this.startOrResumeTimer();
      }
    });

  }

}
