import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-parent',
  templateUrl: './ng-model-parent.component.html',
  styleUrls: ['./ng-model-parent.component.css']
})
export class NgModelParentComponent implements OnInit {

  ngm1=''

  constructor() { }

  ngOnInit() {
  }

}
