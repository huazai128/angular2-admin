import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { BaMenuService } from "../theme"; //路由数据服务处理
import { MENU } from "../app.menu";

@Component({
  selector:"app-pages",
  template:`
        <!-- 左侧导航组件 -->
        <ba-sidebar></ba-sidebar>
        <!-- 顶部导航 -->
        <ba-page-top></ba-page-top>
        
        <div class="al-main">
            <div class="al-content">
                <ba-content-top></ba-content-top>
                <router-outlet></router-outlet>
            </div>
        </div>
        <footer class="al-footer clearfix">
            <div class="al-footer-right">Created with <i class="ion-heart"></i></div>
            <div class="al-footer-main clearfix">
              <div class="al-copy">&copy; <a href="http://akveo.com">Akveo</a> 2016</div>
              <ul class="al-share clearfix">
                <li><i class="socicon socicon-facebook"></i></li>
                <li><i class="socicon socicon-twitter"></i></li>
                <li><i class="socicon socicon-google"></i></li>
                <li><i class="socicon socicon-github"></i></li>
              </ul>
            </div>
        </footer>
    `
})

export class PagesComponent{
  constructor(private _menuService:BaMenuService){}
  ngOnInit(){ //当前组件初始化调用

    this._menuService.updateMenuByRoutes(<Routes>MENU)
  }
}
