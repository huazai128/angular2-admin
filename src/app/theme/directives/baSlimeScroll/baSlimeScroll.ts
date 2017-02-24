//指令
import { Directive,Input,Output,ElementRef,EventEmitter } from "@angular/core";
import "jquery-slimscroll";  //引入jquery滚动条插件

@Directive({
  selector:"[baSlimScroll]"  //放在元素上
})
export class BaSlimScroll{
  @Input() baSlimScrollOptions:Object; // 获取这个自定义属性；

  constructor(private _elementRef:ElementRef){ //指向当前指令注入的元素

  }

  public ngOnChanges(change):void{  //当被绑定的输入属性的值发生变化时调用;ng2生命周期钩子
    //console.log(this.baSlimScrollOptions);
    this._scroll();
  }

  private _scroll():void{
    this._destroy();
    this._init();
  }

  private _init():void{ //初始化滚动条
    console.log(this.baSlimScrollOptions);
    jQuery(this._elementRef.nativeElement).slimScroll(this.baSlimScrollOptions);// this.baSlimScrollOptions = {height: menuHeight}
  }

  private _destroy():void{  //销毁
    jQuery(this._elementRef.nativeElement).slimScroll({destroy:true})
  }
}
