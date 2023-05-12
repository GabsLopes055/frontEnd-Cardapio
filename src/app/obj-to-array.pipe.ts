import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objToArray'
})
export class ObjToArrayPipe implements PipeTransform {

  transform(Object: any=[]): any {

    return Object.values(Object)
    
  }

}
