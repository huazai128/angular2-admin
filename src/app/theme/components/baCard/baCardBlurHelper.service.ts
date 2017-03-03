import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";// Subject:多路推出数据,通过订阅推送数据,next()传值
import { BgMetrics } from "./bgMetrics";

@Injectable()
export class BaCardService{
  private image:HTMLImageElement;
  private imageLoadSubject:Subject<void>;   //泛型接受一个void：强制这个方法必须有返回参数

  //初始化加载
  public init(){
    this.getByImage();
    this.getImageLoadSubject();
  }

  //返回一个Subject对象
  public bodyBgLoad():Subject<void>{
    return this.imageLoadSubject; //  subject()
  }

  //处理浏览器宽高和背景大小；监听浏览器的改变
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
    //getComputedStyle():用于对css样式的操作
    let bg = getComputedStyle(document.body.querySelector("main"),":before");//用于获取伪元素
    //console.log(bg);//可以获取到css样式
    this.image.src = bg.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2'); //获取背景;replace()方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
  }

  //图片加载
  private getImageLoadSubject():void{
    this.imageLoadSubject = new Subject<void>();
    this.image.onerror = (err) =>{  //图片加载出错
      this.imageLoadSubject.complete();
    };
    this.image.onload = () =>{  //图片加载完
      //向所有imageLoadSubject对象中订阅subscribe()推送数据
      this.imageLoadSubject.next(null);  //next(data):用于推送数据，所有的订阅subscribe()方法接受next传递过来的参数
      this.imageLoadSubject.complete();  //complete():所有数据推送完后，触发这个方法
    }
  }
}
