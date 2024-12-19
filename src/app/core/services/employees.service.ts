import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private employeesKey = 'employees'; // Key used to store the data in localStorage

  constructor() { }

  // Initial mock employees data
  private employees = [
    {
      id: 1000,
      firstName: 'Adham',
      lastName: 'Hussien',
      phone: '01165789236',
      email: 'adhamhussien@gmail.com',
      salary: '20000'
    },
    {
      id: 1001,
      firstName: 'Adham',
      lastName: 'Hussien',
      phone: '01165789236',
      email: 'adhamhussien@gmail.com',
      salary: '20000'
    },
    {
      id: 1002,
      firstName: 'Adham',
      lastName: 'Hussien',
      phone: '01165789236',
      email: 'adhamhussien@gmail.com',
      salary: '20000'
    },
    {
      id: 1003,
      firstName: 'Adham',
      lastName: 'Hussien',
      phone: '01165789236',
      email: 'adhamhussien@gmail.com',
      salary: '20000'
    },
    {
      id: 1004,
      firstName: 'Adham',
      lastName: 'Hussien',
      phone: '01165789236',
      email: 'adhamhussien@gmail.com',
      salary: '20000'
    },
    {
      id: 1005,
      firstName: 'Adham',
      lastName: 'Hussien',
      phone: '01165789236',
      email: 'adhamhussien@gmail.com',
      salary: '20000'
    },
    {
      id: 1006,
      firstName: 'Adham',
      lastName: 'Hussien',
      phone: '01165789236',
      email: 'adhamhussien@gmail.com',
      salary: '20000'
    },
    // More employees...
  ];

  // Check if localStorage is available
  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  // Method to get all employees
  getEmployeesData() {
    if (this.isLocalStorageAvailable()) {
      const employeesData = localStorage.getItem(this.employeesKey);

      if (employeesData) {
        return JSON.parse(employeesData); // Parse the stored data from JSON to an array
      }
    }

    return this.employees; // Return the default mock data if localStorage is unavailable
  }

  // Method to add a new employee
  addEmployee(employee: { firstName: string, lastName: string, phone: string, email: string, salary: string }) {
    let employees = this.getEmployeesData(); // Retrieve the current employee list from localStorage

    const maxId = employees.reduce((max: number, emp: { id: number }) => Math.max(max, emp.id), 0);
    const newId = maxId + 1; // Ensure the new ID is unique
    const newEmployee = { id: newId, ...employee };

    console.log("New Employee: ", newEmployee); // Debugging the new employee with generated id

    employees.push(newEmployee); // Add the new employee to the list

    // Save the updated list back to localStorage
    localStorage.setItem(this.employeesKey, JSON.stringify(employees));

    return newEmployee; // Return the newly added employee
  }

  // Delete employee by ID
  deleteEmployee(employeeId: string) {
    const employees = this.getEmployeesData(); // Get employees from localStorage

    const index = employees.findIndex((employee: { id: string; }) => employee.id === employeeId);
    if (index !== -1) {
      employees.splice(index, 1); // Remove employee from the array
      // Save the updated list back to localStorage
      localStorage.setItem(this.employeesKey, JSON.stringify(employees));
      return employees; // Return the updated employee list
    } else {
      console.error('Employee not found');
      return employees; // Return the unchanged array if not found
    }
  }
}