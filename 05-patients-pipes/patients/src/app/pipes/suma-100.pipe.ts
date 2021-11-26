import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suma100'
})
export class Suma100Pipe implements PipeTransform {

  transform(value: number|undefined): number {
    return value? value+100: 100;
  }

}
