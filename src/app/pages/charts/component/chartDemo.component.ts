import { Component } from "@angular/core";
import { ChartistJsService } from "./chartDemo.service";

import "style-loader!./chartDemo.scss";

@Component({
  selector:"app-charts",
  templateUrl:"./chartDemo.html"
})


export class ChartDemo{
  public data:any;

  constructor(private _server:ChartistJsService){}

  ngOnInit(){
    this.data = this._server.getAll();
  }

  getResponsive(padding,offset){
    return this._server.getResponsive(padding,offset);
  }
}
