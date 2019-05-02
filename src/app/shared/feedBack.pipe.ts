import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feedBack'
})
export class FeedBackPipe implements PipeTransform {

  transform(value: string): string {

    if (value === 'mr-auto success') {
      return 'Success';
    }
    return 'Error';
  }

}
