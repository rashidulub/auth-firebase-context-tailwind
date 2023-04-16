import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './assets/Layout/Main';
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import AuthProvider from './Component/Provider/AuthProvider';
import Orders from './Component/Orders';
import PrivateRouter from './Component/Routers/PrivateRouter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/login',
        element:<Login></Login>

      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/orders',
        element:<PrivateRouter><Orders></Orders></PrivateRouter>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
