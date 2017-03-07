import { Directive,ElementRef,HostListener,HostBinding } from "@angular/core";
import { BaThemeConfigProvider } from "../../../theme";  //配置参数
import { BaCardService } from "./baCardBlurHelper.service";
import { BgMetrics } from "./bgMetrics";

/**
 * HostListener:事件监听；
 * HostBinding：事件绑定
 */

//指令
@Directive({
  selector:"[baCardBlur]",
  providers:[BaCardService]  //把数据服务注入到指令中
})

export class BaCardBlur{

  @HostBinding("class.card-blur") isEnabled:boolean = false;

  private _bodyBgSize:BgMetrics;

  constructor(private _baConfig:BaThemeConfigProvider,private _service:BaCardService,private _el:ElementRef){
    if(this._isEnabled()){
      this._service.init();
      this._getBodyImagesSizesOnBgLoad();
      this._recalculateCardStyle();
    }
  }

  //监听浏览器窗口的变化
  @HostListener("window:resize")
  public _onWindowResize():void{
    if(this._isEnabled()){
      this._bodyBgSize = this._service.getBodyBgImageSizes();
      this._recalculateCardStyle();
    }
  }

  public _recalculateCardStylesOnBgLoad():void{
    this._service.bodyBgLoad().subscribe((event) => {
      setTimeout(this._recalculateCardStyle.bind(this));
    })
  }

  //获取body和image的大小
  private _getBodyImagesSizesOnBgLoad():void{
    //一旦触发订阅就获取数据
    this._service.bodyBgLoad().subscribe(() => {
      //获取bgImage参数
      this._bodyBgSize = this._service.getBodyBgImageSizes();
    })
  }

  //重新计算指令的宽高
  private _recalculateCardStyle():void{
    if(!this._bodyBgSize){
      return;
    }
    console.log(this._el);
    this._el.nativeElement.style.backgroundSize = Math.round(this._bodyBgSize.width) + 'px ' + Math.round(this._bodyBgSize.height) + 'px';
    this._el.nativeElement.style.backgroundPosition = Math.floor(this._bodyBgSize.positionX) + 'px ' + Math.floor(this._bodyBgSize.positionY) + 'px';
  }

  //
  private _isEnabled(){
    //console.log(this._baConfig.get().theme.name);  //ng2  返回false
    return this._baConfig.get().theme.name == "blur";
  }



}
