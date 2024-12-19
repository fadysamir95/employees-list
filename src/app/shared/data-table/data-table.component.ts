import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { EmployeesService } from '../../core/services/employees.service';
import { Employee } from '../../core/interface/employee';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-table',
  imports: [TableModule, RouterModule, TranslocoModule, FormsModule],
  providers: [EmployeesService],
  templateUrl: './data-table.component.html'
})
export class DataTableComponent {
  employees: Employee[] = [];
  newEmployee: Omit<Employee, 'id'> = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    salary: ''
  };
  details = "common.viewDetails"

  constructor(private employeesService: EmployeesService) { }

  async ngOnInit() {
    try {
      // Fetch initial data
      this.employees = this.employeesService.getEmployeesData();
    } catch (error) {
      console.error('Error fetching employees data:', error);
    }
  }

  // Create new employee
  async createEmployee() {
    if (!this.newEmployee.firstName || !this.newEmployee.lastName || !this.newEmployee.phone || !this.newEmployee.email || !this.newEmployee.salary) {
      // Add validation if required
      console.log("All fields are required!");
      return;
    }

    try {
      // Use the service to add the employee
      const createdEmployee = this.employeesService.addEmployee(this.newEmployee);

      // No need to push to employees array manually. The service already updates the array.

      this.resetForm(); // Reset form after creating employee

      // Force Angular to detect the change and update the view
      this.employees = this.employeesService.getEmployeesData(); // Re-fetch updated data
    }

    catch (error) {
      console.error('Error creating employee:', error);
    }
  }

  // Delete Employee
  deleteEmployee(employeeId: string) {
    try {
      this.employeesService.deleteEmployee(employeeId);
      this.resetForm(); // Reset form after creating employee
      // Re-fetch the updated list of employees after deletion
      this.employees = this.employeesService.getEmployeesData();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  }

  resetForm() {
    this.newEmployee = { firstName: '', lastName: '', phone: '', email: '', salary: '' };
  }
}