import { Injectable } from "@angular/core";

@Injectable()
export class ProloaderService{ //静态成员只能实例调用

  private static _loaders:Array<Promise<any>> = [];//static：静态成员变量是多个对象(也就是new)共享这个变量，且都可以改变它的值

  public static registerLoader(method:Promise<any>):void{
    this._loaders.push(method)
  }

  public static clear():void {
    this._loaders = [];
  }

  public static load():Promise<any> {
    return new Promise((resolve,reject) => {
      this._executeAll(resolve)
    })
  }

  private static _executeAll(done:Function):void{
    setTimeout(() => {
      //all(Array):接受一个数组作为参数，作用是将多个Promise实例，包装成一个新的Promise实例，只有当所有的Promise对象返回resolve;才算成功
      Promise.all(this._loaders).then((values) => {
        done.call(null,values);//null:指向Window对象；resolve:把值传递出去，通过then获取值
      }).catch((error =>{ //用于捕获错误
        console.error(error);
      }))
    })
  }
}
