import { Component } from "@angular/core";
import { GlobalState } from "../../../global.state";

//面包屑效果

@Component({
  selector:"ba-content-top",
  templateUrl:"./baContentTop.html",
  styleUrls:["./baContentTop.scss"]
})

export class BaContentTop{
  public activePageTitle:string;
  constructor(private state:GlobalState){
    this.state.subscribe("menu.activeLink",(value) => {
      console.log(value)
      if(value){
        this.activePageTitle = value.title;
      }
    })
  }
}
