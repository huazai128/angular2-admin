/**
 * 左侧导航栏效果
 */
/**
 * Input：输入；数据绑定传送
 * Output:输出属性
 * EventEmitter:事件
 */
import { Component,Input,Output,EventEmitter } from "@angular/core";
import { Router,NavigationEnd } from "@angular/router";
import { Subscription } from "rxjs/Rx"; //一个代表可以终止资源的对象,调用unsubscribe：就可以达到终止相应资源

import { BaMenuService } from "../../services";      //路由参数服务
import { GlobalState } from "../../../global.state";

import "style-loader!./baMenu.scss";


@Component({
  selector:"ba-menu",
  templateUrl:"./baMenu.html"
})

export class BaMenu{
  @Input() menuHeight:number; //输入；数据绑定传送
  @Input() sidebarCollapsed:boolean; //获取父组件传递的数据
  @Output() expandMenu = new EventEmitter<any>(); //输出属性自定义事件；在父组件中调用事件

  public menuItems: any[];  //
  protected _menuItemsSub: Subscription;  //
  public showHoverElem: boolean;
  public hoverElemHeight: number;
  public hoverElemTop: number;
  protected _onRouteChange: Subscription;  //
  public outOfArea: number = -200;

  constructor(private _router:Router,private _service:BaMenuService,private _state:GlobalState){}

  /**
   * 初始化执行
   */
  public ngOnInit():void{  //初始化加载
    //console.log(this._router.events);//是一个Subject对象,可以调用subscribe

    //用于监听路由的变化
    this._onRouteChange = this._router.events.subscribe((event) => { //events:是一个观察者对象Observable
      console.log('改变了');
      //console.log(event)  NavigationEnd;导航终端
      if(event instanceof NavigationEnd){ //instanceof:判断属性是否属于该对象
        //console.log(this.menuItems)
        if(this.menuItems){
          this.selectMenuAndNotify(); //初始化的加载导航栏数据
        }else{
          setTimeout(() => this.selectMenuAndNotify());
        }
      }
    });

    //获取路由所有参数
    this._menuItemsSub = this._service.menuItems.subscribe(this.updateMenu.bind(this)); //获取所有路由数据;索取next(data)传递过来的值；

  }


  public updateMenu(newMenuItems):void{   //
    this.menuItems = newMenuItems;
    this.selectMenuAndNotify();
  }

  /**
   * 点击当前路由以及初始化调用
   */
  public selectMenuAndNotify():void{
    console.log("点击了");
    if(this.menuItems){
      this.menuItems = this._service.selectMenuItem(this.menuItems);
      this._state.notifyDataChanged("menu.activeLink",this._service.getCurrentItem())
    }
  }

  //组件的销毁;什么时候销毁
  public ngOnDestroy():void{ //指令的销毁；当Angular每次销毁指令/组件之前调用并清扫,+
    console.log("销毁了");
    this._onRouteChange.unsubscribe(); //unsubscribe:用于资源的终止
    this._menuItemsSub.unsubscribe();  //离开组件时，销毁数据
  }

  public hoverItem($event):void{ //自定义事件，触发；这个事件必须添加到各个路由中才能获取每一个路由元素的高度
    console.log($event);//查看这里所包含的信息
    this.showHoverElem = true; //当鼠标滑到导航是，sidebar-hover-elem显示
    this.hoverElemHeight = $event.currentTarget.clientHeight;//鼠标当前元素下的高度
    this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;  //当前元素距离距离左顶点的位置的高度
  }

  public toggleSubMenu($event):boolean{  //自定义事件，触发
    let submenu = $($event.currentTarget).next();
    if(this.sidebarCollapsed){
      this.expandMenu.emit(null);//事件的触发
      if(!$event.itme.expanded){
        $event.item.expanded = true
      }
    }else{
      $event.item.expanded = !$event.item.expanded;
      submenu.slideToggle();
    }
    return false;
  }
}

