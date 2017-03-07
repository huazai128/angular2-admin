import { Pipe,PipeTransform } from "@angular/core";

import { layoutPaths } from "../../../theme"

@Pipe({
  name:"baAppPicture"
})

export class BaAppPiture implements PipeTransform{
  transform(input:string):string{
    return layoutPaths.images.root + input;
  }
}
