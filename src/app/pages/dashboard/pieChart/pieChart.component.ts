import { Component } from "@angular/core";
import 'easy-pie-chart/dist/jquery.easypiechart.js';
import { PieChartService } from "./pieChart.service";

import "style-loader!./pieChart.scss";

@Component({
  selector:"pie-chart",
  templateUrl:"./pieChart.html"
})

export class PieChart{
  public charts:Array<Object>;
  private _init = false;
  constructor(private _service:PieChartService){
    this.charts = this._service.getData();  //获取数据
  }
  //试图初始化之后加载
  ngAfterViewInit(){
    if(!this._init){
      this._loaderPieCharts();
      this._updatePieCharts();
      this._init = true;
    }
  }

  //chart数据展示
  private _loaderPieCharts():void{
    //each():规定为每个匹配元素规定运行的函数。
    $(".chart").each(function(){
      let $self  = $(this);
      //
      $self.easyPieChart({
        easing:"easeOutBounce",
        onStep:function(from,to,percent){  //在提供当前值的动画期间调用的回调函数
          //console.log(percent);
          //console.log($(this));//此时this指向但钱函数作用域
          $(this.el).find(".percent").text(Math.round(percent)); //round：四舍五入
        },
        barColor: $(this).attr("data-rel"),  //占有率颜色 false:禁止渲染
        trackColor:"rgba(0,0,0,0)",  //空白区颜色 ，false:禁止渲染
        size: 84, //  圆形大小
        scaleLength:0,  //
        animation: 2000, //动画时间
        lineWidth: 9,  //线宽
        lineCap: 'round', // 订帽 为圆形
      })
    })
  }

  //更新chart百分比
  private _updatePieCharts(){
    let getRandomArbitrary = (min, max) => { return Math.random() * (max - min) + min; };
    //如果要更新饼图的当前百分比
    $('.pie-charts .chart').each(function(index, chart) {
      $(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
    });
  }

}
