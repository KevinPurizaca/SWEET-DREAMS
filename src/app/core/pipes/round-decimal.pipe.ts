import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundDecimal'
})

export class RoundDecimal implements PipeTransform {

    transform(value: any, args?: any): any {
        if (isNaN(value) || !isFinite(value)) {
          return 0;
        }
        return (value * 100).toFixed(0);
      }
  
  }
  