import { Injectable } from "@angular/core";
import { BaThemeConfigProvider,colorHelper,layoutPaths } from "../../../theme"

@Injectable()
export class LineChartService{
  constructor(private _baConfig:BaThemeConfigProvider){}

  getData() {

    let layoutColors = this._baConfig.get().colors;
    let graphColor = this._baConfig.get().colors.custom.dashboardLineChart;

    //chart:配置
    return {
      type: 'serial',  //图表类型
      theme: 'blur',   //图表的主题
      marginTop: 10,  //边距
      marginRight: 10, //边距
      responsive: {    //支持响应式，响应式配置
        'enabled': true //接受非json数据格式
      },
      dataProvider: [  //数据对象数组，可以提供任何字段的
        { date: new Date(2012, 11), value: 0, value0: 0 },
        { date: new Date(2013, 0), value: 15000, value0: 19000},
        { date: new Date(2013, 1), value: 30000, value0: 20000},

        { date: new Date(2013, 2), value: 25000, value0: 22000},
        { date: new Date(2013, 3), value: 21000, value0: 25000},
        { date: new Date(2013, 4), value: 24000, value0: 29000},
        { date: new Date(2013, 5), value: 31000, value0: 26000},
        { date: new Date(2013, 6), value: 40000, value0: 25000},
        { date: new Date(2013, 7), value: 37000, value0: 20000},
        { date: new Date(2013, 8), value: 18000, value0: 22000},
        { date: new Date(2013, 9), value: 5000, value0: 26000},
        { date: new Date(2013, 10), value: 40000, value0: 30000},
        { date: new Date(2013, 11), value: 20000, value0: 25000},
        { date: new Date(2014, 0), value: 5000, value0: 13000},

        { date: new Date(2014, 1), value: 3000, value0: 13000},
        { date: new Date(2014, 2), value: 1800, value0: 13000},
        { date: new Date(2014, 3), value: 10400, value0: 13000},
        { date: new Date(2014, 4), value: 25500, value0: 13000},
        { date: new Date(2014, 5), value: 2100, value0: 13000},
        { date: new Date(2014, 6), value: 6500, value0: 13000},
        { date: new Date(2014, 7), value: 1100, value0: 13000},
        { date: new Date(2014, 8), value: 17200, value0: 13000},
        { date: new Date(2014, 9), value: 26900, value0: 13000},
        { date: new Date(2014, 10), value: 14100, value0: 13000},
        { date: new Date(2014, 11), value: 35300, value0: 13000},
        { date: new Date(2015, 0), value: 54800, value0: 13000},
        { date: new Date(2015, 1), value: 49800, value0: 13000}
      ],
      categoryField: 'date',  //数据提供商中包含类别的字段
      categoryAxis: {
        parseDates: true,   //如果类别轴值为“日期”对象，请将其设置为true
        gridAlpha: 0,    //网格线透明度
        color: layoutColors.defaultText, //轴值标签的颜色
        axisColor: layoutColors.defaultText  //轴颜色
      },
      valueAxes: [  //用于创建X、Y轴，或多轴
        {
          minVerticalGap: 50,  //它指定网格线之间一个跨度所需的最小单元格高度
          gridAlpha: 0, //网格线透明度
          color: layoutColors.defaultText, //轴值标签的颜色
          axisColor: layoutColors.defaultText //轴的颜色
        }
      ],
      graphs: [  //创建坐标图
        {
          id: 'g0',   //图唯一的ID
          bullet: 'none',  //项目符号的类型可能的值有：“none”，“round”，“square”，“triangleUp”，“triangleDown”，“triangleLeft”，“triangleRight”，“bubble”，“diamond”，“xError”，“yError” “。
          useLineColorForBulletBorder: true,
          lineColor: colorHelper.hexToRgbA(graphColor, 0.3),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value0',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        },
        {
          id: 'g1',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: colorHelper.hexToRgbA(graphColor, 0.15),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        }
      ],
      chartCursor: {  //鼠标事件
        categoryBalloonDateFormat: 'MM YYYY', //显示年月
        categoryBalloonColor: '#4285F4', //颜色
        categoryBalloonAlpha: 0.7, //
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5
      },

      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      zoomOutButton: {
        backgroundColor: '#fff',
        backgroundAlpha: 0
      },
      zoomOutText: '',
      pathToImages: layoutPaths.images.amChart
    };
  }
}
