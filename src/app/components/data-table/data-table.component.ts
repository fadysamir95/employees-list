import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { EmployeesService } from '../../core/services/employees.service';
import { Employee } from '../../core/interfaces/employee';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-data-table',
  imports: [TableModule, RouterModule, TranslocoModule],
  providers: [EmployeesService],
  templateUrl: './data-table.component.html'
})
export class DataTableComponent {
  details = "common.viewDetails"
  id = "table.id"
  firstName = "table.firstName"
  lastName = "table.lastName"
  phone = "table.phone"
  email = "table.email"
  salary = "table.salary"
  actions = "table.actions"
  update = "common.update"
  trash = "common.delete"

  constructor() { }

  @Input() employees: Employee[] = []; // Input from the parent

  @Output() editEmployee = new EventEmitter<any>(); // Emit selected employee for editing
  @Output() delete = new EventEmitter<number>(); // Output to notify parent about deletion

  // Emit the delete event when the delete button is clicked
  onDelete(employeeId: number) {
    this.delete.emit(employeeId); // Pass the employee ID to the parent
  }

  // Emit the employee details when the edit button is clicked
  onEdit(employee: any) {
    this.editEmployee.emit(employee); // Send employee to the parent
  }
}