import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-footer',
  imports: [TranslocoModule, RouterModule],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  alt = "projectFullName"
  title = 'header.logo.title';
  employeesList = "common.employeesList";
  home = "common.home"
}
