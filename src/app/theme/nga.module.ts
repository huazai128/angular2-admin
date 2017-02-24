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
  BaMsgCenter
} from "./components"    //组件

import{
  BaSlimScroll
} from "./directives"   //指令



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
  BaMsgCenter
];

const NGA_DIRECTIVES = [  //指令
  BaSlimScroll
]

@NgModule({
  declarations: [
    ...NGA_COMPONENT,
    ...NGA_DIRECTIVES
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
    ...NGA_DIRECTIVES
  ]
})
export class NgaModule {
  static forRoot(): ModuleWithProviders {
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
