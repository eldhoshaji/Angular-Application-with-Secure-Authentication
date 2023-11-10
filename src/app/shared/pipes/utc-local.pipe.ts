import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'utcToLocal'
})
export class UtcToLocalPipe implements PipeTransform {
  transform(utcTimestamp: string): string {
    if (!utcTimestamp) {
      return '';
    }

    const utcDateTime = DateTime.fromISO(utcTimestamp, { zone: 'utc' });
    const localDateTime = utcDateTime.toLocal();

    return localDateTime.toFormat('hh:mm a');
  }
}
