import { Exercise } from './exercise.model';
import {Subject} from 'rxjs/Subject';

export class TrainingService{
  exerciseChange=new Subject<Exercise>();
  private availableExercises:Exercise[]=[
    {id:'1',name:'Crunches',duration:30,calories:8},
    {id:'2',name:'Touch Toes',duration:180,calories:15},
    {id:'3',name:'Side Lungs',duration:120,calories:18},
    {id:'4',name:'Burpees',duration:60,calories:8}
  ];

  private runningExercise:Exercise;

  getAvailableExercises(){
    return this.availableExercises.slice();
  }

  startExercise(selectedId:string){
    let selectedExercise=this.availableExercises.find(x=>x.id===selectedId);
    this.runningExercise=selectedExercise;
    this.exerciseChange.next({...this.runningExercise});
  }

  getRunningExercise(){
    return {...this.runningExercise};
  }
}