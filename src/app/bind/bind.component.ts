import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx'
@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  //通过绑定input的属性后可以发送事件流
  serchInput:FormControl=new FormControl();

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

    //观察者进行订阅前台input
    this.serchInput.valueChanges
    //import 'rxjs/Rx' 延迟500毫秒相应
      .debounceTime(500)
      .subscribe(
      stockCode=>this.getStockInfo(stockCode)
    );


   }

  ngOnInit() {
  }

  getStockInfo(value:string){
    console.log(value);
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
