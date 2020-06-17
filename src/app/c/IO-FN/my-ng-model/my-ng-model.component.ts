import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-ng-model',
  templateUrl: './my-ng-model.component.html',
  styleUrls: ['./my-ng-model.component.css']
})
export class MyNgModelComponent implements OnInit {

  @Input() title:string
  @Input() valueIn:string
  @Output() valueOut:EventEmitter<string> = new EventEmitter<string>()




  constructor() { }

  ngOnInit() {
  }
//<input [value]="" (input)="" >
//
}
