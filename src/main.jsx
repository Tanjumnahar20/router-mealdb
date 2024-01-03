import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Meals from './components/Meals/Meals';
import First from './components/First/First';
import MealDetails from './components/MealDetails/MealDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
      path:'/',
      element:<First></First>
      },
      {
        path:'/meals',
        element:<Meals></Meals>,

        },
        {
          path:'meal/:mealId',
          element:<MealDetails></MealDetails>,
        }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
