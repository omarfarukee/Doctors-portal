import React from 'react';
import pic1 from '../../../assets/images/cavity.png'
import pic2 from '../../../assets/images/fluoride.png'
import pic3 from '../../../assets/images/whitening.png'
import pic4 from '../../../assets/images/treatment.png'
const Service = () => {
    return (
        <div className='mt-5'>
            <div className='flex justify-center font-bold'>
                <div className='text-center'>
                    <h1 className='text-2xl text-pink-400'> Our services</h1>
                    <p>we provides our best service for our <br /> honorable patients</p>
                </div>

            </div>
            <div className='mt-4 grid lg:grid-cols-3 md:grid-cols-2 gap-3'>
                <div className='shadow-2xl  text-center p-4 rounded-2xl'>
                    <div className='flex justify-center'>
                        <img src={pic1} alt="" />

                    </div>
                    <h1 className='text-2xl'>Fluoride Treatment</h1>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam  molestiae, officia cupiditate architecto non voluptate?</p>
                    </div>
                </div>
                <div className='shadow-2xl  text-center p-4 rounded-2xl'>
                    <div className='flex justify-center'>
                        <img src={pic2} alt="" />

                    </div>
                    <h1 className='text-2xl'>Cavity Filling</h1>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam  molestiae, officia cupiditate architecto non voluptate?</p>
                    </div>
                </div>
                <div className='shadow-2xl  text-center p-4 rounded-2xl'>
                    <div className='flex justify-center'>
                        <img src={pic3} alt="" />

                    </div>
                    <h1 className='text-2xl'>Teeth Whitening</h1>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam  molestiae, officia cupiditate architecto non voluptate?</p>
                    </div>
                </div>

            </div>

            <div className='mt-5'>
                <div className="hero md:pl-6  lg:pl-7 rounded-2xl bg-gradient-to-l from-primary to-secondary">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={pic4} className="lg:h-96 rounded-lg shadow-2xl" alt='' />
                        <div className='lg:ml-4 md:ml-4'>
                            <h1 className="text-5xl font-bold"> Exceptional Dental Care, on Your Terms  </h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;