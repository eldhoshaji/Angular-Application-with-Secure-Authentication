# Frontend

## Getting Started

To run this Angular application locally, follow these steps:

### Prerequisites

- **Node.js and npm**: You can download and install them from [https://nodejs.org/](https://nodejs.org/).
- **Angular CLI**: To install Angular CLI globally, open your terminal/command prompt and run the following command:

```bash
  npm install -g @angular/cli
```

### Installation

1. Open your terminal/command prompt.
2. Navigate to the project's root directory where the `package.json` file is located.

```bash
cd /path/to/your/project
```

### Runnin the application

1. Run the following command to install the required Node modules:

```bash
npm install
```

2. To start a development server, use the following command:

```bash
ng serve
```

This will launch the application on a local development server. You can access it in your web browser by navigating to http://localhost:4200/. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# Project Structure

This document provides an overview of the project structure for the Angular app.

## `app/`

The `app/` directory is the main application directory.

### `core/`

The `core/` directory contains core functionalities of the application.

- `backend/`: Contains the backend API services and corresponding service classes.
- `guards/`: Contains route guards to protect certain routes.
- `interceptor/`: Houses HTTP interceptors for handling HTTP requests and responses.

### `layout/`

The `layout/` directory contains layout components for different screens of the application.

- `auth`: Layout components related to authentication screens.
- `main`: Layout components for the main content screens.

## `modules/`

The `modules/` directory houses feature modules for different sections of the application.

- `home/`: Contains components and services related to the student dashboard.
- `auth/`: Contains components for login and registration screens.
- `admin-panel/`: Contains components for the admin panel screen.

## `shared/`

The `shared/` directory contains shared components, directives, pipes, and services that can be used across multiple parts of the application.

- `components/`: Contains reusable UI components.
- `directives/`: Houses custom directives.
- `pipes/`: Contains custom pipes for data transformation.
- `services/`: Houses shared services used throughout the application.

## PrimeNG Components

This project utilizes [PrimeNG](https://www.primefaces.org/primeng/) components to enhance the user interface and functionality. PrimeNG is a popular open-source UI component library for Angular applications, offering a wide range of pre-built components and styles to streamline development.

When exploring the project code, you may come across PrimeNG components such as tables, forms, dialogs, and more, which have been integrated to create a polished and user-friendly interface.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
