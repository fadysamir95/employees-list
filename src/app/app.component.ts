import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { LanguageService } from './core/services/language.service';
import { SideMenuComponent } from "./shared/side-menu/side-menu.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SideMenuComponent, FooterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'employees-list';

  constructor(
    private languageService: LanguageService,
  ) {}

  ngOnInit(): void {
    this.languageService.initializeLanguage();
  }
}