import { TestBed, inject } from '@angular/core/testing';

import { LanguageService } from './language.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('LanguageService', () => {
  const httpClientSpy: jasmine.SpyObj<HttpClient> = jasmine.createSpyObj('HttpClient', ['post']);
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LanguageService,
        { provide: HttpClient, useValue: httpClientSpy}
      ]
    });
    service = TestBed.get(LanguageService);
  });

  beforeEach(inject([LanguageService], (s: LanguageService) => {
    service = s;
  }));

  it('should return en as current language', () => {
    expect(service.getCurrentLanguage()).toContain('en');
  });

  it('should return an observable with language iso code passed as param', (done: DoneFn) => {
    httpClientSpy.post.and.callFake((url: string, langCode: string) => {
      return of(langCode);
    });
    service.setCurrentLanguage('pl').subscribe(value => {
      expect(value).toBe('pl');
      done();
    });
  });
});
