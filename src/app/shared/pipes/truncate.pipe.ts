import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, maxCharacters: number): string {
    if (value.length <= maxCharacters) {
      return value;
    } else {
      return value.substring(0, maxCharacters) + '...';
    }
  }
}

