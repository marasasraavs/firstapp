import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-list',
  templateUrl: './hello-list.component.html',
  styleUrls: ['./hello-list.component.css']
})
export class HelloListComponent implements OnInit {

  public users=[{name:'a',ID:'101'},{name:'b',ID:'102'},{name:'c',ID:'103'},{name:'d',ID:'104'}];

  constructor() { }

  ngOnInit() {
    this.helloTo();
  }

 helloTo(){
    console.log("hello");
  }

}
