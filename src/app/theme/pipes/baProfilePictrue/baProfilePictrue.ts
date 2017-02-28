/**
 * 管道
 */
import { Pipe,PipeTransform } from "@angular/core"

import { layoutPaths } from "../../../theme";

//管道服务
@Pipe({name:"baProfilePicture"})
export class BaProfilePicturePipe implements PipeTransform {
  transform(input:string,ext = "png"):string{
    return layoutPaths.images.profile + input + "." + ext;
  }

}
