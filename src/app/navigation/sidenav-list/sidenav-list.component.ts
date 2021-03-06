import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit,OnDestroy {

  @Output() closeSideNav=new EventEmitter<void>();
  isAuth:boolean=false;
  authSubscription:Subscription;
  
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authSubscription=this.authService.authChange.subscribe(authStatus=>{
      this.isAuth=authStatus;
    });
  }

  onClose(){
    this.closeSideNav.emit();
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }

  onLogout(){
    this.authService.logOut();
  }

}
