import { Component } from "@angular/core";

@Component({
  selector:"app-dashboard",
  templateUrl:"./dashboard.html"
})
export class DashBoards{
  constructor(){
    //getComputedStyle：用于获取所有css样式
    //let bg = getComputedStyle(document.body.querySelector("main"),":before");//用于获取伪元素
    //console.log(bg);//可以获取到css样式
    //bg.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2'); //获取背景;replace()方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
  }
}
