import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Layout/Home';
import Shop from './Components/Shop/Shop';
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import loaderProductsCart from './LoaderProductsCart/LoaderProductsCart';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home></Home>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>,
        },
        {
          path: '/review',
          element: <Review></Review>,
          loader: loaderProductsCart
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
