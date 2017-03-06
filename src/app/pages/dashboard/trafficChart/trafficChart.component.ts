import { Component } from "@angular/core";
import * as  Chart from "chart.js";  //使用chart.js做图标  echart等等
import { TrafficChartSerivce } from "./trafficChart.service";

import "style-loader!./trafficChart.scss";


@Component({
  selector:"traffic-chart",
  templateUrl:"./trafficChart.html"
})

//
export class TrafficChart{
  public doughnutData:Array<Object>;
  private options:Object = {  //参数配置
    segmentShowStroke: false, //边框线是否显示
    percentageInnerCutout : 64,  //百分比
    responsive: true   //是否支持响应布局
  };
  constructor(private _service:TrafficChartSerivce){
    this.doughnutData = this._service.getData();  //获取数据
  }

  //试图初始化之调用
  ngAfterViewInit(){
    this._loadChart();
  }

  private _loadChart(){
    //获取canvas元素
    let el = $("#chart-area").get(0) as HTMLCanvasElement;
    //Doughnut(data,options)：环形图,data:数据，options：配置
    new Chart(el.getContext("2d")).Doughnut(this.doughnutData,this.options)
  }
}
