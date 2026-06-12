# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Job Portal Frontend

A modern Job Portal web application built with React, Vite, Tailwind CSS, and Axios. Users can browse jobs, apply for positions, manage their profiles, upload resumes, and track applications.

## Features

* User Authentication (Login/Register)
* Role-Based Access Control
* Browse Available Jobs
* Apply for Jobs
* Track Applications
* Profile Management
* Resume Upload
* Responsive Design
* Admin Dashboard Access

## Tech Stack

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM
* Framer Motion

## Installation

```bash
git clone https://github.com/steven-swag/Job-portal-frontend.git

cd Job-portal-frontend

npm install

npm run dev
```

## Environment Variables

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

## Project Structure

```text
src/
├── components/
├── pages/
├── services/
├── routes/
├── App.jsx
└── main.jsx
```

## Future Enhancements

* Advanced Search
* Job Filters
* Dark Mode
* Pagination
* Real-Time Notifications
* Saved Jobs

## Author

Steven Sharon
