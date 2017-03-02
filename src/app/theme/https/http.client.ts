import { Injectable } from "@angular/core";
import { Http,Response,RequestOptionsArgs } from "@angular/http";
import { Router } from "@angular/router";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable"; //
import 'rxjs/add/operator/catch';  //catch:用于捕获异常
//Operator:是rxjs操作符，提供filter、map等操作


//数据不要处理的就可以使用一下
//用于处理交互请求;使用RESTful风格
@Injectable()
export class HttpClient{
  public apiUrl = process.env.apiUrl || "https://localhost:3000";

  constructor(private _http:Http,private  router:Router){
    console.log(this._http); //查看http的特性对象
    console.log(this.apiUrl);
  }

  //响应获取数据
  private extractData = (res:Response | any) => {
    let body = res.josn();
    return body || {};
  };

  //响应出错
  private handleError = (err: Response | any) => {
    //如果错误就重定向到登录
    if(err.status ==  401) this.router.navigate(["/login"]);
    return Observable.throw(err)
  }

  /**
   * get请求：用于get请求
   * @param url  请求地址
   * @param options  参数可选
   */
  get(url:string,options?:RequestOptionsArgs){
    return this._http.get(this.apiUrl + url,options).map(this.extractData).catch(this.handleError);
  }

  /**
   * post请求：用于表单提交
   * @param url  请求地址
   * @param data 参数可选
   * @param options
   */
  post(url:string,data?:any,options?:RequestOptionsArgs){
    return this._http.post(this.apiUrl + url, data, options).map(this.extractData).catch(this.handleError);
  }

  /**
   * put请求  用于向指定的URI传送更新资源；对一直的资源全部更新；比较耗资源
   * @param url
   * @param data
   * @param options
   */
  put(url:string,data?:any,options?:RequestOptionsArgs){
    return this._http.put(this.apiUrl + url,data,options)
      .map(this.extractData)
      .catch(this.handleError)
  }

  /**
   * delete请求；用于删除
   * @param url
   * @param options
   * @returns {Observable<R>}  返回一个观察者对象；
   */
  delete(url:string,options?:RequestOptionsArgs){
    return this._http.delete(this.apiUrl,options)
      .map(this.extractData)
      .catch(this.handleError)
  }

  /**
   * pacth请求  用于PATCH的局部更新，效率比PUT更好
   * @param url
   * @param data
   * @param options
   */
  patch(url:string,data?:any,options?:RequestOptionsArgs){
     return this._http.patch(this.apiUrl,data,options)
       .map(this.extractData)
       .catch(this.handleError)
  }
}
