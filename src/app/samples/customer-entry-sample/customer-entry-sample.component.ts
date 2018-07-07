import { Component, OnInit } from '@angular/core';
import {Customer} from '../Models/Customer';

@Component({
  //selector: 'app-customer-entry-sample',
  templateUrl: './customer-entry-sample.component.html',
  styleUrls: ['./customer-entry-sample.component.css']
})
export class CustomerEntrySampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentCustomer:Customer=new Customer();

  customersList:Array<Customer>=new Array<Customer>();
save(){
  this.customersList.push(this.currentCustomer);
  this.currentCustomer=new Customer();
}
select(custselected:Customer){
  this.currentCustomer=Object.assign({},custselected);
}
update(){
  for(let c of this.customersList){
    if(this.currentCustomer.CustomerCode==c.CustomerCode){
      c.CustomerAmount=this.currentCustomer.CustomerAmount;
      c.CustomerName=this.currentCustomer.CustomerName;
    }
  }

  this.currentCustomer=new Customer();
}

cancel(){
  this.currentCustomer=new Customer();
}

}
