import { Pipe, PipeTransform } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Status } from '../models/status.model';

@Pipe({
  name: 'status',
  standalone: true  // Mark the pipe as standalone
})
export class StatusPipe implements PipeTransform {

  constructor(private translocoService: TranslocoService) {}

  transform(statusCode: Status): string {
    let translationKey = '';

    switch (statusCode) {
      case 1:
        translationKey = 'status.pending';
        break;
      case 2:
        translationKey = 'status.approved';
        break;
      case 3:
        translationKey = 'status.rejected';
        break;
      default:
        translationKey = 'status.unknown';
    }

    return this.translocoService.translate(translationKey);
  }
}
