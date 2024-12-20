import { Injectable } from '@angular/core'; // Import Injectable decorator

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private readonly storageKey = 'employees'; // Key used to store the data in localStorage

  constructor() {
    this.initializeMockData(); // Call to initialize the mock data
  }

  // Local storage handling
  private initializeMockData() {
    // Ensure the code runs only in a browser environment
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      try {
        const storedData = localStorage.getItem(this.storageKey); // Check if the employees data already exists in localStorage

        // If localStorage is empty or doesn't contain the required data, set mock data
        if (!storedData) {
          console.log('Initializing mock data...');
          // Mock data
          const employees = [
            { id: 1, firstName: 'Adham', lastName: 'Fathi', phone: '01145667053', email: 'adhamfathi90@gmail.com', salary: 5000 },
            { id: 2, firstName: 'Ahmed', lastName: 'Shawki', phone: '01276548890', email: 'ahmedshawki30@outlook.com', salary: 6000 },
            { id: 3, firstName: 'Ahmed', lastName: 'Shawki', phone: '01276548890', email: 'ahmedshawki30@outlook.com', salary: 6000 },
            { id: 4, firstName: 'Ahmed', lastName: 'Shawki', phone: '01276548890', email: 'ahmedshawki30@outlook.com', salary: 6000 },
            { id: 5, firstName: 'Ahmed', lastName: 'Shawki', phone: '01276548890', email: 'ahmedshawki30@outlook.com', salary: 6000 },
            { id: 6, firstName: 'Ahmed', lastName: 'Shawki', phone: '01276548890', email: 'ahmedshawki30@outlook.com', salary: 6000 },
            { id: 7, firstName: 'Ahmed', lastName: 'Shawki', phone: '01276548890', email: 'ahmedshawki30@outlook.com', salary: 6000 },
            { id: 8, firstName: 'Ahmed', lastName: 'Shawki', phone: '01276548890', email: 'ahmedshawki30@outlook.com', salary: 6000 },
            { id: 9, firstName: 'Ahmed', lastName: 'Shawki', phone: '01276548890', email: 'ahmedshawki30@outlook.com', salary: 6000 },
            { id: 10, firstName: 'Ahmed', lastName: 'Shawki', phone: '01276548890', email: 'ahmedshawki30@outlook.com', salary: 6000 },
            { id: 11, firstName: 'Ahmed', lastName: 'Shawki', phone: '01276548890', email: 'ahmedshawki30@outlook.com', salary: 6000 },
            { id: 12, firstName: 'Ahmed', lastName: 'Shawki', phone: '01276548890', email: 'ahmedshawki30@outlook.com', salary: 6000 },
            { id: 13, firstName: 'Ahmed', lastName: 'Shawki', phone: '01276548890', email: 'ahmedshawki30@outlook.com', salary: 6000 }
          ];
          localStorage.setItem(this.storageKey, JSON.stringify(employees)); // Set mock data in localStorage
        } else {
          console.log('Data already exists in localStorage'); // Log if data already exists
        }
      } catch (error) {
        console.error('Error accessing localStorage:', error); // Log any errors
      }
    } else {
      console.error('localStorage is not available'); // Log if localStorage is not available
    }
  }

  // Method to get all employees
  getEmployeesData() {
    const employeesData = localStorage.getItem(this.storageKey);
    return employeesData ? JSON.parse(employeesData) : [];
  }

  // Method to add a new employee
  addEmployee(employee: { firstName: string, lastName: string, phone: string, email: string, salary: string }) {
    let employees = this.getEmployeesData(); // Retrieve the current employee list from localStorage

    const maxId = employees.reduce((max: number, emp: { id: number }) => Math.max(max, emp.id), 0);  // Find the maximum ID in the list
    const newId = maxId + 1; // Ensure the new ID is unique
    const newEmployee = { id: newId, ...employee }; // Create the new employee object with the generated ID

    console.log("New Employee: ", newEmployee); // Debugging the new employee with generated id

    employees.push(newEmployee); // Add the new employee to the list
    localStorage.setItem(this.storageKey, JSON.stringify(employees)); // Save the updated list back to localStorage
    return newEmployee; // Return the newly added employee
  }

  // Method to delete employee by ID
  deleteEmployee(employeeId: number) {
    let employees = this.getEmployeesData(); // Retrieve the current employee list from localStorage

    const index = employees.findIndex((employee: { id: number; }) => employee.id === employeeId); // Find the index of the employee to be deleted

    // If the employee is found, remove it from the list
    if (index !== -1) {
      employees.splice(index, 1); // Remove employee from the array
      localStorage.setItem(this.storageKey, JSON.stringify(employees)); // Save the updated list back to localStorage
      return employees; // Return the updated employee list
    } else {
      console.error('Employee not found'); // Log an error if the employee is not found
      return employees; // Return the unchanged array if not found
    }
  }

  // Method to update employee details
  updateEmployee(updatedEmployee: { id: number; firstName: string; lastName: string; phone: string; email: string; salary: string }) {
    const employees = this.getEmployeesData(); // Retrieve the current employee list from localStorage

    const index = employees.findIndex((employee: { id: number }) => employee.id === updatedEmployee.id); // Find the index of the employee to be updated
  
    // If the employee is found, update the details
    if (index !== -1) {
      employees[index] = { ...employees[index], ...updatedEmployee }; // Update the employee
      localStorage.setItem(this.storageKey, JSON.stringify(employees)); // Save changes to localStorage
      return true; // Return success
    }
    return false; // Return failure if employee not found
  }
}