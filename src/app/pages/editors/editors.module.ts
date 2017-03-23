import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgaModule } from "../../theme/nga.module";
import { CKEditorModule } from "ng2-ckeditor"

import { Editors } from "./editors.component";
import { Ckeditor } from "./component";

import { routing } from "./editors.routing";


@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    NgaModule,
    CKEditorModule,
    routing
  ],
  declarations:[Editors,Ckeditor]
})

export class EditorsModule{}
