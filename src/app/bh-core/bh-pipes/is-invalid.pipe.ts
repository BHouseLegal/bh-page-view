import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'isInvalid',
  pure: false,
})
export class IsInvalidPipe implements PipeTransform {

  transform(control: AbstractControl | null, ...keys: string[]): boolean {
    return control ? control?.touched && !!control?.errors : true;
  }

}
