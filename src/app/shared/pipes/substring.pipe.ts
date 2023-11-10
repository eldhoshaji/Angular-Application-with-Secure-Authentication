import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring'
})
export class SubstringPipe implements PipeTransform {

  transform(value: string, n: number): string {
    if (!value || n <= 0) {
      return '';
    }

    return value.substr(0, n);
  }
}
