import { Component } from "@angular/core";
import { FeedService } from "./feed.service";

import "style-loader!./feed.scss";

@Component({
  selector:"app-feed",
  templateUrl:"./feed.html"
})


export class Feed{
  public feed:Array<Object>;
  constructor(private service:FeedService){}

  ngOnInit(){
    this.feed = this.service.getData();
  }
  expandMessage(message){
    message.expanded = !message.expanded;
  }
}
