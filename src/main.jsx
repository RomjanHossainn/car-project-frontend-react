import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './App.jsx'
import AuthProvider from './AuthProvider/AuthProvider'
import CustomProvider from './CustomProvider/CustomProvider'

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <CustomProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </CustomProvider>
  /* </React.StrictMode> */
);
