import { Component } from "@angular/core";
import { MsgServer } from "./baMsgCenter.service";

import "style-loader!./baMsgCenter.scss";

@Component({
  selector:"ba-msg-center",
  templateUrl:"./baMsgCenter.html",
  providers:[MsgServer]  //数据服务注入
})

export class BaMsgCenter{
  public messages:Array<Object>;
  public notifications:Array<Object>;

  constructor(private service:MsgServer){}

  ngOnInit(){
    this.messages = this.service.getMessages();
    this.notifications = this.service.getNotifications();
  }
}
