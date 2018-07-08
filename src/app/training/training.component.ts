import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit,OnDestroy {

  onGoingTraining=false;
  exerciseSubcription:Subscription;

  constructor(private trainingService:TrainingService) { }

  ngOnInit() {
    this.exerciseSubcription=this.trainingService.exerciseChange.subscribe(ex=>{
      this.onGoingTraining=ex?true:false;
    });
  }

  ngOnDestroy(){
    this.exerciseSubcription.unsubscribe();
  }

}
