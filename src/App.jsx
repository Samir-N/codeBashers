import { useState } from 'react'
import Header from './components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './pages/PageNotFound';

function App() {

  const Router = createBrowserRouter(
    [
      {
        element:<Layout />,
        children:[
          {
            path:'/',
            element:<LandingPage />
          },
            {
            path:'Login',
            element:<Login/>
          },
            {
            path:'Register',
            element:<Register/>
          },
          
        ]
      },
       {
            path:'*',
            element:<PageNotFound/>
          },

    ]
  );



  return (
    <>
<RouterProvider router={Router} />

    </>
  )
}

export default App
