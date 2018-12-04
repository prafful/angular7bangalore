import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringSortPipe'
})
export class StringSortPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args == 'asc'){
      return value.sort();
    } else if(args == 'dsc'){
      return value.sort().reverse()
    }

    return value.sort()

  }

}
