import { Component,Input,Output,EventEmitter,ElementRef,ViewChild } from "@angular/core";

import 'amcharts3';
import 'amcharts3/amcharts/plugins/responsive/responsive.js';
import 'amcharts3/amcharts/serial.js';
import 'ammap3';
import 'ammap3/ammap/maps/js/worldLow';

import { ProloaderService} from '../../../theme/services';
import { BaAmChartService } from "./baAmChart.service"
import "style-loader!./baAmChart.scss";

@Component({
  selector:"ba-am-chart",
  templateUrl:"./baAmChart.html",
  providers:[BaAmChartService]
})

export class BaAmChart{
  @Input() public baAmChartClass:string;  //获取父类数据
  @Input() public baAmChartConfiguration:Object;
  @Output() onChartReady = new EventEmitter<any>(); //输出事件

  @ViewChild("baAmChart") public _selector:ElementRef; //ViewChild：用于父组件需要读取子组件的属性和方法的时候
  constructor(private _baChartService:BaAmChartService){
    console.log(this.baAmChartConfiguration);
    this._loadChartsLib()
  }

  ngOnInit(){  //初始化
    AmCharts.themes.blur = this._baChartService.getTheme();
  }

  ngAfterViewInit(){ //试图初始化之后调用
    //创建一个map；makeChart(el,data):
    let chart = AmCharts.makeChart(this._selector.nativeElement, this.baAmChartConfiguration);
    this.onChartReady.emit(chart);
  }


  private _loadChartsLib():void{
    ProloaderService.registerLoader(new Promise((resolve, reject) => {
      let amChartsReadyMsg = 'AmCharts ready';
      if (AmCharts.isReady) {
        resolve(amChartsReadyMsg);
      } else {
        AmCharts.ready(function () {
          resolve(amChartsReadyMsg);
        });
      }
    }));
  }
}
