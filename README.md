# EmployeesList

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.4.

This project is an Angular-based implementation of a data table that includes advanced features like filtering, sorting, pagination, and clear filters. The project uses **PrimeNG** components for styling and enhanced functionality.

---

## Prerequisites

Ensure you have the following installed:
- **Node.js** (>= 16.x)
- **Angular CLI** (>= 19.x)
- **PrimeNG** (>= 19.0.1)

---

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/fadysamir95/employees-list.git
   cd employees-list
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Application:**
   ```bash
   ng serve
   ```
   Access the application at `http://localhost:4200/`.

---

## Features
- **Data Table**: Displays employees data with sortable and filterable columns.
- **Filtering**: Users can filter data by `ID`, `First Name`, `Last Name`, `Phone`, `Email`, and `Salary`.
- **Sorting**: Column-based sorting is supported.
- **Pagination**: The table supports pagination for efficient data display.
- **Clear Filters**: A button to reset all filters and display the unfiltered data.
- **CRUD**: Basic Create, Read, Update, Delete operations are supported through a simple forms

---

## Usage

### Filtering
- Input fields are provided for each column.
- To filter data, type your desired value into the input box above the table.
- To clear all filters, click the **Clear Filters** button.

### Sorting
- Click on a column header to sort the data by that column.
- Clicking again reverses the sorting order.

### Pagination
- The table supports pagination to improve performance with large datasets.
- Use the paginator below the table to navigate between pages.

---

## File Structure

```
src/
|-- app/
|   |-- components/
|       |-- data-table/
|           |-- data-table.component.html  // HTML template for the table
|           |-- data-table.component.ts    // Component logic
|   |-- features/
|       |-- employees-list/
|           |-- employees-list.component.html  // HTML template for the list
|           |-- employees-list.component.ts    // Component logic
|-- assets/
|   |-- i18n/                          // Translation files
|-- |-- environments/                  // Environment configurations
```

---

## PrimeNG Setup

### Install PrimeNG via NPM:

```bash
npm install primeng @primeng/themes
```

Then add **providePrimeNG** and **provideAnimationsAsync** to the list of providers in your app.config.ts and use the theme property to configure a theme.

---

## Development

### Add a New Feature

1. **Create a new component:**
   ```bash
   ng generate component new-feature
   ```
2. **Update translations:** Add new keys in the `assets/i18n/` folder.

### Running Tests

```bash
ng test
```

---

## Future Improvements

- Add server-side pagination and filtering.
- Integrate with a backend API for dynamic data loading.
- Enhance accessibility features.

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add your feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---

## Acknowledgments
- **PrimeNG** for its excellent UI components.
- **Angular** for its robust framework.