import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";// Subject:多路推出数据,通过订阅推送数据,next()传值
import { BgMetrics } from "./bgMetrics";

@Injectable()
export class BaCardService{
  private image:HTMLImageElement;
  private imageLoadSubject:Subject<void>;   //强制这个方法必须有返回参数


  public init(){

  }

  public bodyBgLoad():Subject<void>{
    return this.imageLoadSubject;
  }

  public getBodyBgImageSizes():BgMetrics{ //返回的数据必须以接口类型的参数
    //获取浏览器窗口的宽高
    let elemW = document.documentElement.clientWidth || document.body.clientWidth;
    let elemH = document.documentElement.clientHeight || document.body.clientHeight;
    console.log(elemW,elemH);
    if(elemW <= 640) return;
    //是否为背景图片宽高
    let imgRatio = (this.image.height / this.image.width);
    let containerRatio = (elemH / elemW);
    let finalHeight,finalWidth;
    if(containerRatio > imgRatio){
      finalHeight = elemH;
      finalWidth = (elemH / imgRatio);
    }else{
      finalWidth = elemW;
      finalHeight = (elemW * imgRatio)
    }

    return { width: finalWidth,height:finalHeight,positionX: (elemW - finalWidth)/2,positionY: (elemH - finalHeight)/2 }
  }

  //获取背景图片
  private getByImage():void{
    this.image = new Image();
    let bg = getComputedStyle(document.body.querySelector("main"),":before");//用于获取伪元素
  }

}
