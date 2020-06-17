import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Jiraff } from '../j-page/j-page.component'

@Component({
  selector: 'j-item',
  templateUrl: './j-item.component.html',
  styleUrls: ['./j-item.component.css']
})
export class JItemComponent implements OnInit {
  constructor() {}

  @Input() j:Jiraff

  //notifications
  @Output() clickNote = new EventEmitter<null>()
  @Output() deleteNote = new EventEmitter<number>()
  @Output() randomColorNote = new EventEmitter<string>()


  clickNoteFn(){
    console.log('clickNoteFn for jiraff ' + this.j.name);
    this.clickNote.emit()
  }

  ngOnInit() {
    setTimeout(()=>{
      this.randomColorNote.emit(this.j.color)
    }, 1000*this.j.id)
  }

  deleteNoteFn(){
    this.deleteNote.emit(this.j.id)
  }


}
