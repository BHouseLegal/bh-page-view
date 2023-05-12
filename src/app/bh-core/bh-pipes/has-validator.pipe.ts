import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'hasValidator',
  pure: false,
})
export class HasValidatorPipe implements PipeTransform {

  transform(control: AbstractControl | null, ...keys: string[]): boolean {
    const validatorList = control && control?.validator && control?.validator({} as AbstractControl)
    return validatorList && validatorList['required'];
  }

}
