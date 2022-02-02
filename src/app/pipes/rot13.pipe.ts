import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rot13'
})
export class Rot13Pipe implements PipeTransform {

  transform(value: string): string {
    let encoded = "";
    for (let i = 0; i < value.length; i++) {
      let charCode = value.charCodeAt(i) +13;

      if (charCode > 122) {
        charCode = charCode  - 122 + 96;
      }

      encoded += String.fromCharCode(charCode);
    }
    return encoded;
  }
}
