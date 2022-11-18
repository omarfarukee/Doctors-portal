import React from 'react';
import './Register.css'
const Register = () => {
    return (
        <div>
             <div className="hero min-h-screen ">
                <div className="hero-content reg-container">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow bg-base-300">
                    <div className='flex justify-center pt-5'>
                             <h1 className='text-3xl text-pink-500 font-bold'>Register..</h1>
                        </div>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter Name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="Enter Photo-URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter password" className="input input-bordered" required/>
                                <p></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-pink-400 border-none hover:bg-gray-400"> Register</button>
                            </div>
                        </form>
                        <div  className="form-control  w-10/12 btn-google">
                             <button className="btn btn-primary bg-pink-400 border-none hover:bg-gray-400"> Sign Up With Google</button>
                             {/* <p className='mt-2 lg:ml-10 md:ml-10 account'>Already have an 
                             account? <Link className='text-blue-700 hover:text-blue-900' to='/login'>Login</Link></p> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;