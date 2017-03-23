import { Component,ViewChild,Input,Output,ElementRef,EventEmitter } from "@angular/core";

import * as Chartist from "chartist";

import "style-loader!./baChartistChart.scss";

@Component({
  selector:"ba-chartist-chart",
  templateUrl:"./baChartistChart.html"
})

export class BaChartistChart{
  //@Input():用于获取父类数据
  @Input() baChartistChartType:string;  //这些不能在construct中获取数据；
  @Input() baChartistChartData:Object;
  @Input() baChartistChartOptions:Object;
  @Input() baChartistChartResponsive:Object;
  @Input() baChartistChartClass:string;
  @Output() onChartReady = new EventEmitter<any>();  //输出事件

  //对试图进行操作；
  @ViewChild('baChartistChart') public _selector: ElementRef;

  constructor(){
    console.log(this.baChartistChartData);//undefined
  }

  private chart;
  
  //试图初始化后调用
  ngAfterViewInit() {
    this.chart = new Chartist[this.baChartistChartType](this._selector.nativeElement, this.baChartistChartData, this.baChartistChartOptions, this.baChartistChartResponsive);
    this.onChartReady.emit(this.chart);
  }

  ngOnChanges(changes) {
    if (this.chart) {
      (<any>this.chart).update(this.baChartistChartData, this.baChartistChartOptions);
    }
  }

  ngOnDestroy():void {
    if (this.chart) {
      this.chart.detach();
    }
  }

}
