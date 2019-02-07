import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isTest:boolean=false;
  
  ngOnInit()
  {

  }
  public students=[{name:'sai',roll:'1'},{name:'muni',roll:'2'},{name:'srav',roll:'3'}];

  sayhello(){
    this.isTest=true;
    console.log("clicked");
  }

}



