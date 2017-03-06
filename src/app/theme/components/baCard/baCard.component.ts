import { Component,Input,Output } from "@angular/core";

@Component({
  selector:"ba-card",
  templateUrl:"./baCard.html"
})

export class BaCard{
  @Input() public title:string;    //Input:获取父类数据
  @Input() public baCardClass:string;
  @Input() public cardType:string;

}
