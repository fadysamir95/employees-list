import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Employee } from '../../core/interfaces/employee';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-data-table',
  imports: [TableModule, RouterModule, TranslocoModule],
  providers: [],
  templateUrl: './data-table.component.html'
})
export class DataTableComponent {
  // Translations
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
  filterBy = "filter.filterBy"
  clear = "filter.clear"

  constructor() { }

  @Input() employees: Employee[] = []; // Input from the parent

  @Output() editEmployee = new EventEmitter<any>(); // Emit selected employee for editing
  @Output() delete = new EventEmitter<number>(); // Output to notify parent about deletion

  filterCriteria: { [key: string]: string | number } = {}; // Filter criteria for the table
  filteredEmployees: Employee[] = []; // Array to hold filtered employees

  // Emit the delete event when the delete button is clicked
  onDelete(employeeId: number) {
    this.delete.emit(employeeId); // Pass the employee ID to the parent
  }

  // Emit the employee details when the edit button is clicked
  onEdit(employee: any) {
    this.editEmployee.emit(employee); // Send employee to the parent
  }

  // Initialize the filtered list when the input changes
  ngOnChanges() {
    this.filteredEmployees = [...this.employees]; // Initialize the filtered list
  }

  // Apply the filter based on input
  onFilter(event: Event, field: keyof Employee) {
    const target = event.target as HTMLInputElement; // Ensure the target is an HTMLInputElement
    if (!target) return; // Gracefully handle cases where target is null
  
    const filterValue = target.value.toLowerCase();
    console.log('Filter Value:', filterValue);
    this.filterCriteria[field] = filterValue;
    console.log('Filter Criteria:', this.filterCriteria);
  
    this.filteredEmployees = this.employees.filter((employee) => {
      return Object.keys(this.filterCriteria).every((key) => {
        const criteriaValue = this.filterCriteria[key as keyof Employee];
        if (!criteriaValue) return true; // Skip if no filter is set for this field
  
        const employeeValue = employee[key as keyof Employee];
        if (typeof employeeValue === "number" && typeof criteriaValue === "string") {
          // Handle numeric fields: Convert number to string
          // return employeeValue.toString().includes(criteriaValue);
          return employeeValue.toString() === criteriaValue;
        } else if (typeof employeeValue === "string" && typeof criteriaValue === "string") {
          // Handle string fields: Use toLowerCase for case-insensitive comparison
          // return employeeValue.toLowerCase().includes(criteriaValue.toLowerCase());
          return employeeValue.toLowerCase() === criteriaValue.toLowerCase();
        }
        return false; // Unexpected data type
      });
    });
  }

  clearFilters() {
    this.filterCriteria = {}; // Clear all filter criteria
    this.filteredEmployees = [...this.employees]; // Reset filtered employees to the full list
  
    // Reset input fields
    const filterInputs = document.querySelectorAll<HTMLInputElement>('.filter-input');
    filterInputs.forEach(input => input.value = '');
  }
  
}