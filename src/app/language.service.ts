import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private readonly httpClient: HttpClient) { }

  getCurrentLanguage(): string {
    return 'en';
  }

  setCurrentLanguage(languageIsoCode: string): Observable<string> {
    return this.httpClient.post<string>('http://some.nice.url/', languageIsoCode);
  }
}
