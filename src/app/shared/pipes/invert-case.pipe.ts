import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invertCase'
})
export class InvertCasePipe implements PipeTransform {

  transform(value: string): string {
    if(value.toLowerCase() === value){
      return value.toUpperCase();
    }else{
      return value.toLowerCase();
    }
  }

}
