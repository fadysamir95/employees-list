import { Component } from '@angular/core';
import { DataTableComponent } from "../../components/data-table/data-table.component";
import { Employee } from '../../core/interfaces/employee';
import { EmployeesService } from '../../core/services/employees.service';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees-list',
  imports: [DataTableComponent, RouterModule, TranslocoModule, FormsModule, CommonModule],
  templateUrl: './employees-list.component.html'
})
export class EmployeesListComponent {
  // Translations
  create = "common.create"
  add = "common.add"
  firstName = "table.firstName"
  lastName = "table.lastName"
  phone = "table.phone"
  email = "table.email"
  salary = "table.salary"
  update = "common.update"
  delete = "common.delete"
  confirmDelete = "common.confirmDelete"
  cancel = "common.cancel"
  requiredField = "common.requiredField"
  invalidEmail = "common.invalidEmail"
  employeeCreatedSuccessfully = 'common.employeeCreatedSuccessfully';
  updateSuccessMessageSuccessfully = 'common.employeeUpdatedSuccessfully';
  success = 'common.success';
  close = 'common.close';

  employees: Employee[] = []; // Array to store the list of employees

  loading: boolean = false; // Loader state

  // ID of the employee to delete
  employeeToDelete: number | null = null;

  // Flag to control the visibility of the loader
  updateSuccess: boolean = false;

  // Inject the EmployeesService
  constructor(private employeesService: EmployeesService) { }

  // Load employees on component initialization
  ngOnInit() {
    this.loadEmployees();
  }

  // Load employees from the service
  loadEmployees() {
    this.loading = true; // Show loader
    setTimeout(() => { // Simulate delay for demonstration
      this.employees = this.employeesService.getEmployeesData();
      this.loading = false; // Hide loader after data is fetched
    }, 1000);
  }

  // Object to store the new employee details
  newEmployee: Omit<Employee, 'id'> = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    salary: ''
  };

  // Open create modal
  openModal() {
    const modal = new window.bootstrap.Modal(document.getElementById('employeeModal'));
    modal.show(); // Show the modal
  }

  // Create a new employee
  createEmployee(employeeForm: NgForm) {
    // Check if all fields are filled
    if (
      !this.newEmployee.firstName ||
      !this.newEmployee.lastName ||
      !this.newEmployee.phone ||
      !this.newEmployee.email ||
      !this.newEmployee.salary
    ) {
      console.log('All fields are required!');
      return;
    }

    this.employeesService.addEmployee(this.newEmployee); // Send new employee to the service
    this.closeModal(employeeForm); // Close modal
    this.showSuccessModal(); // Show success modal
    this.employees = this.employeesService.getEmployeesData(); // Refresh the employee list
  }

  // Close create modal
  closeModal(form: NgForm) {
    form.resetForm();

    const modal = window.bootstrap.Modal.getInstance(document.getElementById('employeeModal'));
    modal.hide(); // Hide the modal
  }

  // Show the success modal
  showSuccessModal() {
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();
  }

  // Open delete confirmation modal
  openDeleteConfirmation(employeeId: number) {
    this.employeeToDelete = employeeId; // Store the employee ID to delete
    const modal = new bootstrap.Modal(
      document.getElementById('deleteConfirmationModal')
    );
    modal.show(); // Show the confirmation modal
  }

  // Delete the employee
  deleteConfirmed() {
    // Check if the employeeToDelete variable is set
    if (this.employeeToDelete !== null) {
      this.employeesService.deleteEmployee(this.employeeToDelete); // Delete the employee
      this.loadEmployees(); // Reload the employee list
      this.employeeToDelete = null; // Reset the employeeToDelete variable
    }

    // Close the modal
    const modalElement = document.getElementById('deleteConfirmationModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide(); // Hide the modal
  }

  // Update Employee
  currentEmployee = {
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    salary: ''
  }; // Holds the selected employee's data for updating

  // Open the update modal and populate the current employee data
  openUpdateModal(employee: any) {
    this.currentEmployee = { ...employee }; // Populate the currentEmployee object
    const modalElement = document.getElementById('updateEmployeeModal');
    const modal = new bootstrap.Modal(modalElement!); // Create the modal
    modal.show();
  }

  // Update employee details
  updateEmployee() {
    const success = this.employeesService.updateEmployee(this.currentEmployee);
    if (success) {
      this.employees = this.employeesService.getEmployeesData(); // Refresh the employee list
      this.closeUpdateModal(); // Close the modal
      this.showUpdateSuccessAlert(); // Show success alert
    } else {
      console.error('Failed to update employee');
    }
  }

  // Close the update modal
  closeUpdateModal() {
    const modalElement = document.getElementById('updateEmployeeModal');
    const modal = bootstrap.Modal.getInstance(modalElement!);
    modal?.hide();
  }

  // Show success alert after update
  showUpdateSuccessAlert() {
    this.updateSuccess = true; // Set the flag to true to display the alert
    setTimeout(() => {
      this.closeUpdateAlert(); // Automatically hide the alert after 3 seconds
    }, 2500);
  }

  // Close the success alert
  closeUpdateAlert() {
    this.updateSuccess = false; // Set the flag to false to hide the alert
  }

  // Reset the form
  resetForm() {
    this.newEmployee = { firstName: '', lastName: '', phone: '', email: '', salary: '' };
  }
}