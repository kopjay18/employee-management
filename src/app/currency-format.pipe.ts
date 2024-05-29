import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
  standalone: true
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number, currencyCode: string = 'Rp'): string {
    if (value !== null && value !== undefined) {
      return `${currencyCode} ${value.toLocaleString('id-ID')}`;
    }
    return `${currencyCode} 0`;
  }
}
