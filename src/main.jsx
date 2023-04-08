import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/LayOut/Admin';
import OrderReview from './components/OrderReview/OrderReview';

const router = createBrowserRouter([{
    path: "/",
    element: <Admin></Admin>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tshirts.json')
        
    },
    {
      path: 'Review',
      element: <OrderReview></OrderReview>
    },
  ]
  }]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
