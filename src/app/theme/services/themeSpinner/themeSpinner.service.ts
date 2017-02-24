import { Injectable } from "@angular/core";

//加载效果显示和隐藏
@Injectable()
export class ThemeSpinner{
  private _selector:string = "preloader";
  private _element:HTMLElement;

  constructor (){
    this._element = document.getElementById(this._selector);//获取元素ID
  }

  public show():void{ //显示
    this._element.style["display"] = "block";
  }

  public hide(delay: number = 0):void{ //隐藏
    setTimeout(() => {
      this._element.style["display"] = "none";
    },delay)
  }

}
