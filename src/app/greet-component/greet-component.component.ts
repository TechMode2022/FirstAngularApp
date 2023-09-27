import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet-component',
  templateUrl: './greet-component.component.html',
  styleUrls: ['./greet-component.component.css']
})

// ensure OnInt is imported
export class GreetComponentComponent implements OnInit {
  constructor(){

  }

  ngOnInit(): void {
    
  }
  name: string = "MyAngular";

 //add address field
 public address: string = "KTPO";

 // add city field
 public city: string = "Bangalore";

 // add state field
 public state: string = "Karnataka";

 public age : number = 22;



  get userName(): string {
    return this.name;
  }

  set userName(value: string) {
    this.name = value;
  }

  greet(): void { 
    alert("Hello " + this.name);
  };

  // get address,city,state and age and show these things in alert message
  getAddress(){
    alert(this.address + " "+ this.city + " " + this.state + " " + this.age);
  
  }
  
  

onShow(event: any) {
  debugger
  alert(event.target.innerHTML);// return show
}
}
