import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export type SupportedLanguage = 'en' | 'ar'; // Add more supported languages as needed

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly storageKey = 'language'; // Keeping original storage key
  private languageChange$ = new BehaviorSubject<SupportedLanguage>(null!);

  constructor(
    private translocoService: TranslocoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const storedLang = localStorage.getItem(this.storageKey);
      if (storedLang) {
        this.setLanguage(storedLang as SupportedLanguage);
      } else {
        this.setLanguage(this.translocoService.getDefaultLang() as SupportedLanguage);
      }
    }
  }

  setLanguage(lang: string) {
    try {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(this.storageKey, lang);
      }
      
      this.translocoService.setActiveLang(lang);
      this.initializeLanguage();
      this.languageChange$.next(lang as SupportedLanguage);
    } catch (error) {
      console.error('Error setting language:', error);
      // Fallback to default language if there's an error
      const defaultLang = this.translocoService.getDefaultLang();
      this.translocoService.setActiveLang(defaultLang);
    }
  }

  getLanguage() {
    return this.translocoService.getActiveLang();
  }

  initializeLanguage() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    try {
      const activeLang = this.translocoService.getActiveLang();
      const isRTL = activeLang === 'ar';

      // Set language direction (RTL or LTR)
      document.documentElement.lang = activeLang;
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

      // Change stylesheet based on active language
      const styleSheetLink = document.getElementById('styleSheet') as HTMLLinkElement;
      if (styleSheetLink) {
        const newStylePath = isRTL ? './assets/css/style-rtl.css' : './assets/css/style-ltr.css';
        if (styleSheetLink.href !== newStylePath) {
          styleSheetLink.href = newStylePath;
        }
      }
    } catch (error) {
      console.error('Error initializing language:', error);
    }
  }
}