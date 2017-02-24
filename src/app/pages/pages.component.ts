import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { BaMenuService } from "../theme"; //路由数据服务处理
import { MENU } from "../app.menu";

@Component({
  selector:"app-pages",
  template:`
        <!-- 左侧导航组件 -->
        <ba-sidebar></ba-sidebar>
        <ba-page-top></ba-page-top>
        <!-- 顶部导航 -->
    `
})

export class PagesComponent{
  constructor(private _menuService:BaMenuService){

  }

  ngOnInit(){ //当前组件初始化调用
    this._menuService.updateMenuByRoutes(<Routes>MENU)
  }
}
