import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from "./components/Pages/Home.jsx";
import Properties from "./components/Pages/Properties.jsx";
import UpdateProfile from "./components/Pages/UpdateProfile.jsx";
import Register from "./components/Pages/Register.jsx";
import Login from "./components/Pages/Login.jsx";
import Footer from "./components/Pages/Footer.jsx";
import AuthProvider from "./components/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/properties",
        element: <Properties></Properties>,
      },
      {
        path: "/updateprofile",
        element: <UpdateProfile></UpdateProfile>,
        children: []
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  },
  {
    path: "/footer",
    element: <Footer></Footer>
  }



]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
