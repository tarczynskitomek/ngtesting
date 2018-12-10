import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private readonly languageService: LanguageService) {
  }

  getCurrentLanguageInfo(): string {
    return `Current language is ${this.languageService.getCurrentLanguage()}`;
  }
}
