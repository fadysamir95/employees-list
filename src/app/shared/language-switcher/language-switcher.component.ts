import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-language-switcher',
  imports: [TranslocoModule],
  templateUrl: './language-switcher.component.html'
})
export class LanguageSwitcherComponent {
  switch = "accessibility.switchLang";
  language = 'header.language';

  changeLanguage() {
    const currentLang = localStorage.getItem('language') || 'en'; // Default to 'en' if no language is set
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', newLang);
    window.location.reload();
  }
}