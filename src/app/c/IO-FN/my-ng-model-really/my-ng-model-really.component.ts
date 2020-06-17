import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'trully',
  templateUrl: './my-ng-model-really.component.html',
  styleUrls: ['./my-ng-model-really.component.css']
})
export class MyNgModelReallyComponent implements OnInit {

  @Input() title:string
  @Input() shuki:string
  @Output() shukiChange:EventEmitter<string> = new EventEmitter<string>()
  
  constructor() { }

  ngOnInit() {
  }

}
