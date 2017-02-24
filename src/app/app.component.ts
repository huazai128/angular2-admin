import { Component, ViewContainerRef } from '@angular/core';

import { GlobalState } from './global.state';
import { BaThemeConfig } from './theme/theme.config';

import { ProloaderService,ThemeSpinner,ImageLoaderService } from "./theme/services";
import { layoutPaths } from "./theme/theme.constants";

import 'style-loader!./app.scss';  //样式的引入
import 'style-loader!./theme/initial.scss';


@Component({
  selector: 'app',
  template: `
    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}" baThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `
})

export class App {

  isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState,
              private _spinner:ThemeSpinner,
              private imageLoader:ImageLoaderService,
              private viewContainerRef: ViewContainerRef,
              private themeConfig: BaThemeConfig) {

    this.themeConfig.config();
    this._loaderImage();
    //Subject对象可以向多方推送信息;
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => { //这个是浏览器小于1200触发
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public ngAfterViewInit():void{ //在当前视图初始化之前调用
    ProloaderService.load().then((values) => {
     this._spinner.hide();
    })
  }

  private _loaderImage():void{
    ProloaderService.registerLoader(this.imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'))
  }

}
