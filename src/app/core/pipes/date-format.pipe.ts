import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'DateFormatPipe'
})
export class DateFormatPipe implements PipeTransform {

    transform(value: any, format: string = 'dd/MM/yyyy'): any {    
      if (value ==null || value =='') {
        return '';
      } 
        const datePipe = new DatePipe('en-US');
        return datePipe.transform(value, format);
    }

}