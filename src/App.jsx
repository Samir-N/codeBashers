import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './pages/PageNotFound';
import Services from './pages/Services';
import TutorDashboard from './pages/tutorDashboard';
import StudentDashboard from './pages/tutorDashboard';


function App() {

  const Router = createBrowserRouter(
    [
      {
        element:<Layout/>,
        children:[
          {
            path:'/',
            element:<LandingPage />
          },
           {
            path:'/Services',
            element:<Services />
          },
            {
            path:'/Login',
            element:<Login/>
          },
            {
            path:'/Register',
            element:<Register/>
          },
              {
            path:'/StudentDashboard',
            element:<StudentDashboard />
          },
              {
            path:'/TutorDashboard',
            element:<TutorDashboard/>
          }
          
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
