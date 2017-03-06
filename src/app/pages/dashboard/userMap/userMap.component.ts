import { Component } from "@angular/core";
import { UserMapService } from "./userMap.service";

import "style-loader!./userMap.scss"

@Component({
  selector:"user-map",
  templateUrl:"./userMap.html"
})

export class UserMap{
  public mapData:Object;
  constructor(private _userMap:UserMapService){
    this.mapData = this._userMap.getData();
  }
}

