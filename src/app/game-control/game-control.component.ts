import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  interval: any;
  incrementNumber: number = 0;
  @Output() createdNumber = new EventEmitter<number>();
  onStart(){
    this.interval = setInterval(() => {
      this.createdNumber.emit(
        ++this.incrementNumber
      )
    }, 1000)
  }
  onStop(){
    clearInterval(this.interval);
  }
}
