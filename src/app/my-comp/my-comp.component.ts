import { Component } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent {

  logs: boolean[] = [];
  status: boolean = false;
  onToggle(){
    this.status = !this.status;
    this.logs.push(this.status)
  }
}
