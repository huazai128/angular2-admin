import { Component,Input,Output,EventEmitter } from "@angular/core";
import "style-loader!./baMenuItem.scss";

@Component({
  selector:"ba-menu-item",
  templateUrl:"./baMenuItem.html"
})

export class BaMenuItem{
  @Input() menuItem:any;  //父组件数据的传递到组件中；
  @Input() child:boolean = false;

  @Output() itemHover = new EventEmitter<any>();  //输出属性
  @Output() toggleSubMenu = new EventEmitter<any>();

  public onHoverItem($event):void{
    this.itemHover.emit($event); //自定义事件；把事件参数传递都自定义事件中；
  }

  public onToggleSubMenu($event,item):boolean{
    $event.item = item;
    this.toggleSubMenu.emit($event);
    return false;
  }

}
