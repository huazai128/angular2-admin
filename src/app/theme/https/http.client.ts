import { Injectable } from "@angular/core";
import { Http,Response,RequestOptionsArgs } from "@angular/http";
import { Router } from "@angular/router";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable"; //
import 'rxjs/add/operator/catch';  //catch:用于捕获异常


/**
 * 用于处理交互请求
 */
@Injectable()
export class HttpClient{
  public apiUrl = process.env.apiUrl || "https://localhost:3000";

  constructor(private _http:Http,private  router:Router){
    console.log(this.apiUrl);
  }

  //响应获取数据
  private extractData = (res:Response | any) => {
    let body = res.josn();
    return body || {};
  };

  //响应出错
  private handleError = (error: Response | any) => {
    if(error.status ==  401) this.router.navigate(["/login"]);
  }


}
