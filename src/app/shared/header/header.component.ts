import { Component } from '@angular/core';
import { LanguageSwitcherComponent } from "../language-switcher/language-switcher.component";
import { TranslocoModule } from '@ngneat/transloco';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [LanguageSwitcherComponent, TranslocoModule, RouterModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  alt = "projectFullName"
  title = 'header.logo.title';
}