/**
 * 左侧导航栏框架;主要用于监听浏览器的宽度
 */

/**
 * ElementRef:用于匀速的操作
 * HostListener：用于事件的监听
 * ViewEncapsulation：可以解决styles和styleUrls同时引用的问题；
 */
import { Component,ElementRef,HostListener,ViewEncapsulation } from "@angular/core";
import { GlobalState } from "../../../global.state"; //
import { layoutSizes } from "../../../theme";  //获取宽高

import 'style-loader!./baSidebar.scss'; //scss预加载

@Component({
  selector:"ba-sidebar",
  templateUrl:"./baSidebar.html",
  //encapsulation: ViewEncapsulation.None
})

export class BaSidebar{

  public menuHeight:number;  //使用数据传值；绑定到[menuHeight]指令中
  public isMenuCollapsed:boolean = false;
  public isMenuShouldCollapsed:boolean = false;

  constructor(private _element:ElementRef,private _state:GlobalState){
    //订阅，
    this._state.subscribe("menu.isCollapsed",(isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    })
  }

  public ngOnInt():void{  //初始化加载；生命周期钩子
    if(this._shouldMenuCollapse()){
      this.menuCollapse();
    }
  }

  public ngAfterViewInit():void{ //在视图显示之前调用；生命周期钩子
    setTimeout(() => this.updateSidebarHeight());
  }

  @HostListener("window:resize")  //用于监听浏览器窗口的变化
  public onWindowResize():void{
    var isMenuShould = this._shouldMenuCollapse();
    if(this.isMenuShouldCollapsed !== isMenuShould){  //当浏览器小于1200,进入
      this.menuCollapseStateChange(isMenuShould);  //触发函数
    }
    this.isMenuShouldCollapsed = isMenuShould;

    this.updateSidebarHeight(); //
  }

  public menuExpand():void{   //自定义事件
    this.menuCollapseStateChange(false)
  }

  public menuCollapse():void{
    this.menuCollapseStateChange(true)
  }

  public menuCollapseStateChange(isCollapsed:boolean):void{
    //触发；
    this._state.notifyDataChanged("menu.isCollapsed",this.isMenuCollapsed);  //只要这个方法被触发，所有的this._state.subscribe():就会调用；
  }

  public updateSidebarHeight():void{ //获取左侧导航栏的高度
    //获取当前ba-sidebar组件下的第一个元素的高度
    this.menuHeight = this._element.nativeElement.childNodes[0].clientHeight - 84;  //左侧导航栏的高度减去-84
  }

  public _shouldMenuCollapse():boolean{ //返回boolean
    //判断浏览器窗口是否小于等于1200
    return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
  }
}
