import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgUploaderModule } from 'ngx-uploader';

import {
  BaThemeConfig
} from './theme.config';

import {
  BaThemeConfigProvider
} from './theme.configProvider';


import {
  ThemeSpinner,
  ProloaderService,
  ImageLoaderService,
  BaMenuService
} from "./services";  //数据服务

import {
  BaSidebar,
  BaMenu,
  BaMenuItem,
  BaPageTop,
  BaMsgCenter,
  BaContentTop,
  BaCard,
  BaAmChart
} from "./components"    //组件

import{
  BaSlimScroll
} from "./directives"   //指令
import { BaCardBlur } from "./components/baCard/baCardBlur.directive"


import {
  BaProfilePicturePipe,
  BaAppPiture
} from "./pipes";       //管道


const NGA_SERVICES = [  //服务
  ProloaderService,
  ThemeSpinner,
  ImageLoaderService,
  BaMenuService
];

const NGA_COMPONENT = [  //组件
  BaSidebar,
  BaMenu,
  BaMenuItem,
  BaPageTop,
  BaMsgCenter,
  BaContentTop,
  BaCard,
  BaAmChart
];

const NGA_DIRECTIVES = [  //指令
  BaSlimScroll,
  BaCardBlur
];


const NGA_PIPES = [       //管道
  BaProfilePicturePipe,
  BaAppPiture
]

@NgModule({
  declarations: [
    ...NGA_COMPONENT,
    ...NGA_DIRECTIVES,
    ...NGA_PIPES
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgUploaderModule,
  ],
  exports: [
    ...NGA_COMPONENT,
    ...NGA_DIRECTIVES,
    ...NGA_PIPES
  ]
})


export class NgaModule {
  static forRoot(): ModuleWithProviders {  //静态类  直接调用;不能通过constructor
    return <ModuleWithProviders> { //模板提供者
      ngModule: NgaModule,
      providers: [  //数据服务注入
        BaThemeConfigProvider,
        BaThemeConfig,
        ...NGA_SERVICES //使用扩展运算符，本身含有迭代器
      ],
    };
  }
}
