import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {


  divClass:string;
  isSetFront:boolean = true;

  ngDivClass:any={
    a:false,
    b:false,
    c:false
  }
  constructor() {
    //使用匿名函数三秒后改变CSS
    setTimeout(()=>{this.divClass="a b c"},3000);


    setTimeout(()=>{this.ngDivClass={
      a:true,
      b:true,
      c:true
    }},3000);


   }

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
