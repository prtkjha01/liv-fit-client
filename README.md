# Liv Fit - Frontend

### Overview

Welcome to the frontend repository of Liv Fit Web Application! This application is designed with a mobile-first approach to provide users with a seamless fitness tracking experience. We've used Vue 3, TypeScript, PrimeVue, Vite, Pinia, and Chart.js to create a modern and efficient web application.

### Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

### Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/prtkjha01/liv-fit-client.git
   ```
2. **Install dependencies**

   ```bash
   cd liv-fit-client

   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
4. **Open the application in your browser**
   Visit http://localhost:5173 in your web browser to see the application

### Project Structure

The project structure is organized to maintain a clean and scalable codebase. Here are the key directories:

- `src/`: Contains the source code of the Vue 3 application, including crucial files such as App.vue
  - `assets/`: Store static assets like images and gifs.
  - `components/`: Reusable Vue components.
  - `layouts/`: layouts for different pages.
  - `pages/`: parent components for different routes.
  - `store/`: pinia stores containing API services and other services for different modules.
  - `utils/`: other utility services.
- `public/`: Static assets that don't require processing.

### Dependencies

- **Vue 3:** Progressive JavaScript framework for building user interfaces.
- **TypeScript:** Typed superset of JavaScript.
- **PrimeVue:** Vue UI library with a set of rich components.
- **Vite:** Next-generation frontend tooling for faster development.
- **Pinia:** Intuitive, type-safe, and Vuex-inspired state store for Vue.
- **Chart.js:** Simple yet flexible JavaScript charting library.

### Usage

- **Development**
  ```bash
  npm run dev
  ```
  This will start the development server and you can access the application at http://localhost:5173.
- **Build**
  ```bash
  npm run build
  ```

### Features

- Mobile-first design for a responsive user experience.
- Integration of PrimeVue components for a sleek UI.
- Efficient state management using Pinia.
- Visualization of fitness data through interactive charts using Chart.js.
- TypeScript for improved code quality and maintainability.
