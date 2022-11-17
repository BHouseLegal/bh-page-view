import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../bh-services/translation.service';

@Pipe({
  name: 'bhTranslate',
  pure: false
})
export class BhTranslatePipe implements PipeTransform {
  
  constructor(private translateService: TranslationService) {}

  transform(value: string): string {
    return this.translateService.translate(value);
  }

}
