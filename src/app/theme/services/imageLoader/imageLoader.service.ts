import { Injectable } from "@angular/core";

@Injectable()
export class ImageLoaderService{  //用于图片是否加载完成
  public load(src):Promise<any>{
    return new Promise((resolve,reject) => {
      let image = new Image();
      image.src = src;
      image.onload = function(){
        resolve("图片加载完成");
      }
    })
  }

}
