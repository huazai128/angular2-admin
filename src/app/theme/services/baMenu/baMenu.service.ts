/**
 * 思路：解析路由
 *
 */
import { Injectable } from "@angular/core";
import { Router,Routes } from "@angular/router";
import { BehaviorSubject } from "rxjs/BehaviorSubject";//  保存最近一次值，保存最新的值,subject对象

/**
 * 导航栏数据处理；解析路由数据
 */


@Injectable()
export class BaMenuService {
  //subject对象
  menuItems =  new BehaviorSubject<any[]>([]);  //BehaviorSubject：用于保存最近的值;是一个subject衍生对象，

  protected _currentMenuItem = {};            //当前路由

  constructor(private _router:Router){};


  // 1:获取Routes数据
  public updateMenuByRoutes(routes:Routes){  //获取路由数据;
    //获取的数据进行深度clone；深度clone后的对象修改不会影响clone之前的数据;
    let convertedRoutes = this.convertRoutesToMenus(_.cloneDeep(routes));  //使用lodash库；cloneDeep:深度克隆；深度克隆的对象可以完全脱离原对象，我们对新对象的任何修改都不会反映到原对象中，深度克隆和原对象的不相等
    this.menuItems.next(convertedRoutes);  //next：是向所有subscribe订阅推送数据,next(data)接受要推送的数据;
  }

  // 2：clone Routes数据
  public convertRoutesToMenus(routes:Routes):any[] {//返回数组，数组里面的元素可以是任何类型
    //console.log(routes);
    //获取深度clone的数据
    let items = this._convertArrayToItems(routes);  //处理所有路由返回一个数组
    return  this._skipEmpty(items);
  }

  public getCurrentItem():any {  //返回任意类型
    return this._currentMenuItem;
  }

  /**
   * 点击选择路由
   * @param menuItems
   * @returns {Array}
   */
  public selectMenuItem(menuItems:any[]):any[]{
    let items = [];
    menuItems.forEach((item) => {
      this._selectItem(item);

      if(item.selected){
        this._currentMenuItem = item;
      }
      if(item.children && item.children.length > 0){
        item.children = this.selectMenuItem(item.children);
        //console.log(item.children)
      }
      items.push(item);
    });
    return items;
  }

  /**
   * 7
   * @param items
   * @returns {any}
   * @private
   */
  protected  _skipEmpty(items:any[]):any[]{  //protected:受保护,
    //console.log(items);
    let menu = [];
    items.forEach((item) => {
      let menuItem;
      if(item.skip){ //判断skip
        if(item.children　&& item.children.length > 0){ //如果当前item
          menuItem = item.children;
        }else{
          menuItem = item;
        }
      }
      if(menuItem){
        menu.push(menuItem);
      }
    });
    return [].concat.apply([],menu); //合并数组，返回一个新的数组
  }

  /**
   * 3：遍历Routes,获取每一个路由
   * @param routes  单个对象路由
   * @param parent  如果存在子路由，就把父路由传递进去
   * @returns {Array} 返回一个数组
   * @private
   */
  protected _convertArrayToItems(routes:any[],parent?:any):any[]{
    let items = [];
    routes.forEach((route) => {  //forEach:遍历数组
      items.push(this._convertObjectToItem(route,parent));  //获取每一个路由节点
    });
    return items;
  }


  /**
   * 4：对单个路由对象进行操作
   * @param object :单个路由对象对象
   * @param parent ：参数可选，指向
   * @returns {any} 返回一个任何类型
   * @private  私有类
   */
  protected _convertObjectToItem(object,parent?:any):any{  //对单个路由节点处理
    let item: any = {};
    if(object.data && object.data.menu){  //判断单个对象中是否存在data属性，
      //此时item保存所有menu下所有属性和值
      item = object.data.menu;  //把当前router对象data属性下的所有属性赋给item对象
      //console.log(item.title);
      //console.log(object);
      item.route = object;
      delete item.route.data.menu; //删除menu属性
    }else {
      //console.log(object);如果单路由中没有data属性进入
      item.route = object;
      item.skip = true; //添加skip属性
    }
    //item.route：是一个单个路由节点
    if(Array.isArray(item.route.path)){  //path:判断path属性是否为数组
      item.route.paths = item.route.path;  //直接把path赋值给paths
    }else{
      //[routerLink] = item.route.paths;这里是定义每一个组件链接地址
      item.route.paths = parent && parent.route && parent.route.paths ? parent.route.paths.slice(0) : ['/'];
      if(!!item.route.path) item.route.paths.push(item.route.path);
    }
    //判断是否存在子路由；
    if(object.children && object.children.length > 0){
      //递归
      item.children = this._convertArrayToItems(object.children,item);
      //console.log(item.children)
    }

    let prepared = this._prepareItem(item);

    if((prepared.selected || prepared.expanded) && parent){  //
      parent.expanded = true;
    }
    //console.log(prepared)
    return prepared;
  }

  /**
   * 5:路由中没有data属性进入
   * @param object
   * @returns {any}
   * @private
   */
  protected _prepareItem(object:any):any{
    if(!object.skip){//此时路由没有data属性的进入
      object.target = object.target || ""; //
      object.pathMatch = object.pathMatch || "full";
      //console.log(object);
      return this._selectItem(object);
    }
    return object;
  }

  /**
   * 6 设置路由是否激活
   * @param object
   * @returns {any}
   * @private
   */
  protected _selectItem(object:any):any{
    //console.log(object);
    //createUrlTree:用于创建URL树；如：create /team/33/user/11；router.createUrlTree(['/team', 33, 'user', 11]); isActive(url:string|Tree,exact:boolean):判断当前路由是否激活
    object.selected = this._router.isActive(this._router.createUrlTree(object.route.paths), object.pathMatch === 'full');
    return object;
  }

}
