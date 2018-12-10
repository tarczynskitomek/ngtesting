import { TestBed, inject } from '@angular/core/testing';

import { MasterService } from './master.service';
import { LanguageService } from './language.service';

describe('MasterService', () => {
  let masterService: MasterService;
  let languageService: jasmine.SpyObj<LanguageService>;

  beforeEach(() => {
    const languageServiceSpy = jasmine.createSpyObj('LanguageService', ['getCurrentLanguage']);
    TestBed.configureTestingModule({
      providers: [
        MasterService,
        { provide: LanguageService, useValue: languageServiceSpy }
      ]
    });
    masterService = TestBed.get(MasterService);
    languageService = TestBed.get(LanguageService);
  });

  it('should be created', inject([MasterService], (service: MasterService) => {
    expect(service).toBeTruthy();
  }));

  it('should return the information about the current language', () => {
    languageService.getCurrentLanguage.and.returnValue('en');
    expect(masterService.getCurrentLanguageInfo()).toContain('Current language is en');
  });
});
