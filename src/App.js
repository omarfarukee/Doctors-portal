import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './Layout/Main';
import Home from './Page/Home/Home/Home';
import Appointment from './Page/Appointment/Appointment';
import Register from './Page/Register/Register';
import Login from './Page/login/Login';
import Dashboard from './Page/Dashboard/Dashboard';
import PrivateRoute from './Private/PrivateRoute';
import DashboardLayout from './Layout/DashboardLayout';
import MyAppointment from './Page/Dashboard/MyAppointment/MyAppointment';
import SignUp from './Page/SignUp/SignUp';
import AllUsers from './Layout/AllUsers/AllUsers';
import AdminRoute from './Private/AminRout/AdminRoute';
import AddDoctor from './Page/Dashboard/AddDoctor/AddDoctor';
import ManageDoctor from './Page/Dashboard/ManageDoctor/ManageDoctor';
import { Toaster } from 'react-hot-toast';
function App() {
  const router = createBrowserRouter([
    {
        path :'/' ,
       element:<Main></Main>,
       children:  [
      
        {
          path: '/home',
          element:<Home></Home>,
       },
        {
          path: '/',
          element:<Home></Home>,
       },
       {
        path: '/appointment',
        element: <Appointment></Appointment>
       },
     {
        path:'/register',
       element:<Register></Register>
      
      },
     {
        path:'/login',
       element:<Login></Login>
      
      },
     {
        path:'/signUp',
       element:<SignUp></SignUp>
      
      }

   
      ]
    },
    
 
{
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
        {
          path: '/dashboard',
          element: <MyAppointment></MyAppointment>
        },
        {
          path: '/dashboard/allUsers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: '/dashboard/addDoctor',
          element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
        },
        {
          path: '/dashboard/manageDoctor',
          element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
        },
       ]
      
  }
  
  
  ] )
  
  return (
    <div className='max-w-[1140px] mx-auto'>
    <RouterProvider router={router}>

  </RouterProvider>
    </div>
  );
}

export default App;
