import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autoSearchPipe'
})
export class AutoSearchPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args == null) {
      return value
    }
    
    return value.filter(function(v){
      return v.name.toLowerCase().includes(args.toLowerCase())
    })

  }

}
