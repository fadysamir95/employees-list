import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-side-menu',
  imports: [TranslocoModule, RouterModule, CommonModule],
  templateUrl: './side-menu.component.html'
})
export class SideMenuComponent {
  public menuItems = [
    { key: 'common.home', route: '/home' },
    { key: 'common.employeesList', route: '/employees-list' },
  ];
}