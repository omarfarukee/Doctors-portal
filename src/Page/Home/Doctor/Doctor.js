import React from 'react';
import img from '../../../assets/images/doctor-small.png'
import img2 from '../../../assets/images/appointment.png'
const Doctor = () => {

    return (

        <div className='lg:flex bg-slate-500 items-center mt-20 rounded-2xl ' style={{backgroundImage:`url(${img2})`, backgroundSize:'cover'}}>
             <img className='-mt-16 lg:h-96 h-72 lg:ml-7 ml-5'  src={img} alt="" />
          
            <div className=' items-center  text-white pl-5'>
                <h1>Appointment.</h1>
                <h1 className='text-3xl '>Make an appointment today</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis molestias tenetur architecto illum harum, enim, voluptatum ullam at quo ab nemo nesciunt? Praesentium placeat cum tempore, repellendus incidunt officiis nobis!</p>
                <button className='bg-gradient-to-r from-primary to-secondary btn btn-primary mt-4 mb-4'>get started</button>
            </div>
        </div>
    );
};

export default Doctor;