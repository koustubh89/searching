import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeExample'
})
export class PipeExamplePipe implements PipeTransform {

  transform(value: any, args?: string): any {
    if (args === "asc") {
      return value.sort();
    }
    else if (args === "desc") {
      return value.sort().reverse();
    }
    else {
      return value;
    }
  }

}
