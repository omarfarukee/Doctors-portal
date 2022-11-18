import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './Layout/Main';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home/Home';
import Appointment from './Page/Appointment/Appointment';
import Register from './Page/Register/Register';
function App() {
  const router = createBrowserRouter([
    {
        path :'/' ,
       element:<Main></Main>,
       children: 
       [
        {
          path: '/home',
          element:<Home></Home>,
       },
       {
        path: '/appointment',
        element: <Appointment></Appointment>
       },
     {
        path:'/register',
       element:<Register></Register>
      
      }
      ]
    }
    
  ])
  return (
    <div className='max-w-[1140px] mx-auto'>
    <RouterProvider router={router}>

  </RouterProvider>
    </div>
  );
}

export default App;
