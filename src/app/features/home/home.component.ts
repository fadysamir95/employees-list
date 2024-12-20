import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-home',
  imports: [TranslocoModule, RouterModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  // Translations
  alt = "projectFullName"
  title = 'header.logo.title';
  employeesList = 'common.employeesList';
  employees = 'common.employees';
  managementSystem = 'common.managementSystem';
}