/**
 * 配置
 */
export const IMAGES_ROOT = 'assets/img/';//图片路径


//设定宽高来隐藏左侧导航栏
export const layoutSizes = {
  resWidthCollapseSidebar: 1200,
  resWidthHideSidebar: 500
};

//图片路径配置
export const layoutPaths = {
  //图片的绝对路径
  images: {
    root: IMAGES_ROOT,
    profile: IMAGES_ROOT + 'app/profile/',
    amMap: 'assets/img/theme/vendor/ammap/',
    amChart: 'assets/img/theme/vendor/amcharts/dist/amcharts/images/'
  }
};

//颜色处理
export class colorHelper {
  static shade = (color, weight) => {
    return colorHelper.mix('#000000', color, weight);
  };

  static tint = (color, weight) => {
    return colorHelper.mix('#ffffff', color, weight);
  };

  static hexToRgbA = (hex, alpha) => {//把hex颜色转换成rgba
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {//判断是否为hex颜色
      c = hex.substring(1).split('');//返回是一个数组
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');//把数组转换成字符串
      return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
    }
    throw new Error('Bad Hex');
  };

  static mix = (color1, color2, weight) => { //混淆颜色

    let d2h = (d) => d.toString(16); //把数据转换成16进制
    let h2d = (h) => parseInt(h, 16);//parseInt(string, radix) 函数可解析一个字符串，并返回一个整数,radix:取值范围在2-36之间，超出这个范围，返回一个NaN
    let result = "#";
    for (let i = 1; i < 7; i += 2) {
      //把字符串转换成数字
      let color1Part = h2d(color1.substr(i, 2));//substr(start,length):返回截取字符串;start:开始截取的位置，length：截取的长度
      let color2Part = h2d(color2.substr(i, 2));
      //转成十六进制的字符串
      let resultPart = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));
      result += ('0' + resultPart).slice(-2);//slice:返回选中的元素，如为负数就从结尾开始截取
    }
    //console.log(result);
    return result;
  };
}

//判断是否移动端设备
export const isMobile = () => (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase());
