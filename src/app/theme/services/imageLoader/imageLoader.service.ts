import { Injectable } from "@angular/core";
//用于图片是否加载完成
@Injectable()
export class ImageLoaderService{
  public load(src):Promise<any>{
    //返回一个promise对象
    return new Promise((resolve,reject) => {
      let image = new Image();
      image.src = src;
      image.onload = function(){
        resolve("图片加载完成"); //then()接受promise对象返回的数据
      }
    })
  }

}
