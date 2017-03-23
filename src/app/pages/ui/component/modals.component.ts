import { Component,ViewChild } from "@angular/core";
import { ModalDirective } from "ng2-bootstrap";

import "style-loader!./modals.scss";

@Component({
  selector:"app-ui-modal",
  templateUrl:"./modals.html"
})

export class Modals{

  @ViewChild("childModal") childModal:ModalDirective;

  showChildModal():void{
    this.childModal.show();
  }

  hideChildModal():void{
    this.childModal.hide();
  }

  init($event,modal){
    if(confirm("你确定要保存吗？？")){
      //可以进行表单提交
      modal.hide();
    }
  }
}
