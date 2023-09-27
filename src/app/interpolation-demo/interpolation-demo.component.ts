import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-demo',
  templateUrl: './interpolation-demo.component.html',
  styleUrls: ['./interpolation-demo.component.css']
})
export class InterpolationDemoComponent implements OnInit {
  public text: string = "Hello World!";

 
  public caption : string = "Click Me!";

  num : number =0;
  randomNums : number[] = [3,6,7,8,9,10,11,12,13,14];

  private count : number = 0;

  ngOnInit(): void {
    
  }

  getCurrentTime(): any {
    return Date.now();
  }
}
