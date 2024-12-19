import { Component } from '@angular/core';
import { DataTableComponent } from "../../shared/data-table/data-table.component";

@Component({
  selector: 'app-employees-list',
  imports: [DataTableComponent],
  templateUrl: './employees-list.component.html'
})
export class EmployeesListComponent {

}