import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    // regex = /([+][1-9]+[(][1-9]+[)][1-9]+)/gm;
    // return value.replace(value, regex)
      return value
  }
}
