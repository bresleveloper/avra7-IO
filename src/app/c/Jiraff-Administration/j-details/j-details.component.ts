import { Component, OnInit, Input } from '@angular/core';
import { Jiraff } from '../j-page/j-page.component';

@Component({
  selector: 'app-j-details',
  templateUrl: './j-details.component.html',
  styleUrls: ['./j-details.component.css']
})
export class JDetailsComponent implements OnInit {
  @Input() j:Jiraff

  constructor() { }

  ngOnInit() {
  }

}
