import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RouteLayouts from './layouts/RouteLayouts';
import Home from './pages/Home';
import Register from './pages/Register';
import Internship from './pages/Internship';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteLayouts />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'nclex/register',
        element: <Register />,
      },
      {
        path: 'internship',
        element: <Internship />,
      }
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
