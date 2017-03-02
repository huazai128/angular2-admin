import { Component,Input,Output } from "@angular/core";

@Component({
  selector:"ba-card",
  templateUrl:"./baCard.html"
})

export class BaCard{
  @Input() public title:string;
  @Input() public baCardClass:string;
  @Input() public cardType:string;

}
