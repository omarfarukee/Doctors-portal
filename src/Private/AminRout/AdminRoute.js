import React,{useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Hooks/UseAdmin';
import { AuthContext } from '../../Page/Context/AuthProvider';
import Loader from '../../Page/Loader/Loader';


const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <Loader></Loader>
    }

//     if(loading){
//        return <div className='flex justify-center mt-2'><button className="btn btn-square loading h-20 w-20"></button></div>
   
//    }
   if(user && isAdmin) {
    return<Navigate to='/login' state={{from : location}} replace></Navigate>
   }
   return  children
   };

export default AdminRoute;