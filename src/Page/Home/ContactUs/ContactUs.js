import React from 'react';
import pic from '../../../assets/images/appointment.png'
const ContactUs = () => {
    return (
        <div className='flex justify-center text-center rounded-2xl pt-20 pb-20 mt-10' style={{backgroundImage:`url(${pic})`, backgroundSize:'cover'}}>
            <div >
                <h1 className='text-pink-400'>contact us</h1>
                <h1 className='text-3xl text-white'>stay connected with us</h1>
                <div className='mt-3'>
                <input type="text" placeholder="Email Address" className="input input-bordered input-warning w-full max-w-xs mb-4" />
                <input type="text" placeholder="Subject " className="input input-bordered input-warning w-full max-w-xs mb-4" /> <br />
                <textarea className="textarea textarea-warning w-80 h-48" placeholder="Write your message"></textarea>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;