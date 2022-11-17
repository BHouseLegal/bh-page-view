import { Injectable } from '@angular/core';
import { Languages } from '../bh-enums/languages';
import { esCo } from '../bh-translations/es-co.json';

const languages: {[key:string]: any} = {
  "es-Co": esCo,
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage: string;

  constructor() { 
    this.currentLanguage = Languages[0];
  }

  translate(value: string): string {
    const path = value.split('.');
    const language = languages[this.currentLanguage];
    return path.reduce((obj, property) => obj = obj[property] , language);
  }

  setCurrentLanguage(language: string): void {
    this.currentLanguage = language;
  }
}
