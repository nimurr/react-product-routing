import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './components/Product/Product.jsx';
import Productsdetails from './components/ProductDetails/Productsdetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        loader: () => fetch('https://dummyjson.com/products'), 
        element:<Product></Product>
      },
      {
        path:'/:id',
        loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`), 
        element:<Productsdetails></Productsdetails>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
