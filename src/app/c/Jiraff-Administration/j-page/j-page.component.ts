import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-j-page',
  templateUrl: './j-page.component.html',
  styleUrls: ['./j-page.component.css']
})
export class JPageComponent implements OnInit {


  selectedJ:Jiraff

  constructor() { }

  ngOnInit() {
  }

  deleteJ(jid){
    /*for (let i = 0; i < array.length; i++) {
      const _j = array[i];
      if (_j.id == jid){
        return i;
      }
    }*/
    let index = this.JiraffsArray.findIndex(_j => _j.id == jid)
    this.JiraffsArray.splice(index, 1);
  }




  //data, should come from Service by Ajax
  JiraffsArray:Jiraff[] = [
    { id:1, name:'shuki', height:5.55, color:'blue', isBossy:false },
    { id:2, name:'edna', height:15.55, color:'red', isBossy:true },
    { id:3, name:'bony', height:53.55, color:'brown', isBossy:false },
    { id:4, name:'clyde', height:5.55, color:'violet', isBossy:false },
    { id:5, name:'moti', height:9.6, color:'white', isBossy:false },
    { id:6, name:'franko', height:7.4, color:'black', isBossy:true },
    { id:7, name:'muli', height:3.2, color:'orangered', isBossy:false },
    { id:8, name:'tortya', height:12.2, color:'gold', isBossy:true },
    { id:9, name:'molina', height:6.9, color:'tomato', isBossy:false },
    { id:10, name:'barvazon', height:7.8, color:'darkviolet', isBossy:false },
    { id:11, name:'moolyer', height:8.9, color:'indigo', isBossy:false },
  ]

}


export class Jiraff {
  id:number
  name:string
  height:number
  color:string
  isBossy:boolean
}
