import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadComponent: () =>
            import('./features/home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'employees-list',
        loadComponent: () =>
            import('./features/employees-list/employees-list.component').then((m) => m.EmployeesListComponent),
    }
];