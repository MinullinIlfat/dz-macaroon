import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(new RegExp('[0-9]*'), '+375 (29) 3689868')
  }
}
