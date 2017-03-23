import { Component } from "@angular/core";

import "./ckeditor.loader";
import "ckeditor";
import "style-loader!./ckeditor.scss";

@Component({
  selector:"app-ckeditor",
  templateUrl:"./ckeditor.html"
})

export class Ckeditor{
  public ckeditorContent:string ="<p>Hello CKEditor</p>";
  public config:Object = {
    uiColor: '#7fc9d9',
    height: '400',
  };
  public onContentChanged($event){
    console.log($event)
  };
  public onEditorCreated($event){
    console.log($event)
  }
}
