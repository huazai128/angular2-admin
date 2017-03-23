import { Routes,RouterModule } from "@angular/router";

import { Editors } from "./editors.component";
import { Ckeditor } from "./component"


const routes:Routes = [
  {path:"",component:Editors,children:
    [{path:"ckeditor",component:Ckeditor}]
  }
]

export const routing = RouterModule.forChild(routes);
