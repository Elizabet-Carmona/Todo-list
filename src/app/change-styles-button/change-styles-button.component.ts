import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-styles-button',
  templateUrl: './change-styles-button.component.html',
  styleUrls: ['./change-styles-button.component.scss']
})
export class ChangeStylesButtonComponent implements OnInit {

  constructor() { }
  public styleType = 'style1';
  public counter = 0;
  ngOnInit() {
  }

  public changeStyle(){
    this.counter = this.counter + 1;
    console.log(this.counter);
    
    if(this.counter==1){
      this.styleType = 'style1';
    }else if(this.counter==2){
      this.styleType = 'style2';
    }else if(this.counter==3){
      this.styleType = 'style3';
    }else{
      this.counter=0;
    }
    

  }

}
