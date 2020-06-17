import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setInterval(()=> this.secondsCounter.emit(new Date().getSeconds()), 1000)
  }

  @Output() myEvent:EventEmitter<number> = new EventEmitter<number>()
  @Output() secondsCounter:EventEmitter<number> = new EventEmitter<number>()

  convertToNumber(str):void{
    let n = parseInt(str)
    this.myEvent.emit(n)
  }



}
