import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Service from './commponent/Service';
import Contact from './commponent/Contact';
import About from './commponent/About';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/service",
    element:<Service/>
  },
  {
    path:"/about",
    element:<About/>
    
  },
  {
    path:"/contact",
    element:<Contact/>
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);

