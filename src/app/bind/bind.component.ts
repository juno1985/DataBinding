import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //接受任意事件
  doOnClick(event:any){
    console.log(event);
  }

  doOnInput(event:any){
    //DOM属性值可以改变
    console.log(event.target.value);
    //HTML属性不能改变
    console.log(event.target.getAttribute('value'));
  }
}
