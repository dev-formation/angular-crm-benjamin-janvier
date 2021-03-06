import { Pipe, PipeTransform } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {
  transform(val: any, tva?: boolean): number {
    console.log("---- Total Pipe used")
    if(tva) {
      return val.totalTTC();
    } else {
      return val.totalHT();
    }
  }

}
