import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/UseAdmin';
import { AuthContext } from '../Page/Context/AuthProvider';
import Header from '../Page/Header/Header';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        <li><Link to='/dashboard'>My Appointment</Link></li>
                        {
                            !isAdmin && <>
                                <li><Link to='/dashboard/allUsers'>All users</Link></li>
                                <li><Link to='/dashboard/addDoctor'>Add Doctor</Link></li>
                                <li><Link to='/dashboard/manageDoctor'>Manage Doctors</Link></li>
                                </>
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;