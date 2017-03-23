import { Component,ViewChild,HostListener,Input,ElementRef } from "@angular/core";

import "style-loader!./baBack.scss";


@Component({
  selector:"ba-back-top",
  template:`<a href="javascript:void(0)" #baBackTop class="fa fa-angle-up back-top ba-back-top"></a>`
})

export class BaBackTop{

  @Input() position:number = 400;
  @Input() showSpeed:number = 500;
  @Input() moveSpeed: number = 1000;

  @ViewChild("baBackTop") public _el:ElementRef;

  ngAfterViewInit(){
    this._onWindowScroll();  //试图加载后调用
  }

  @HostListener("window:click")
  public _onClick():boolean{
    $("html,body").animate({scrollTop: 0},{duration:this.moveSpeed});
    return false;
  }

  @HostListener("window:scroll")
  public _onWindowScroll():void{
    let el = this._el.nativeElement;
    window.scrollY > this.position ? $(el).fadeIn(this.showSpeed) : $(el).fadeOut(this.showSpeed);

    console.log(window.scrollY)

  }
}
