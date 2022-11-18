import React from 'react';
import chair from '../../../assets/images/chair.png'
import icon1 from '../../../assets/icons/clock.svg'
import icon2 from '../../../assets/icons/marker.svg'
import icon3 from '../../../assets/icons/phone.svg'
import Service from '../Service/Service';
import Doctor from '../Doctor/Doctor';
import Reviews from '../reviews/Reviews';
import ContactUs from '../ContactUs/ContactUs';
const Home = () => {
    return (
        <div className='p-5'>
            <div>
                <div className="hero lg:pt-16 lg:pb-16 bg-base-200 rounded-2xl">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img alt='' src={chair} className=" h-64 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Your New Smile br Starts Here</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary bg-gradient-to-r  from-primary to-secondary">Get Started</button>
                        </div>
                    </div>

                </div>
                <div className='mt-4 grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <div className='bg-gradient-to-r from-primary to-secondary rounded-2xl flex p-4'>
                    <img src={icon1} alt="" />
                    <div className='ml-5'>
                        <h1>Opening hour</h1>
                        <small> Lorem ipsum dolor sit amet <br /> consectetur.</small>
                    </div>
                </div>
                <div className='bg-base-200 rounded-2xl flex p-4'>
                    <img src={icon2} alt="" />
                    <div className='ml-5'>
                        <h1>Visit our location</h1>
                        <small> Lorem ipsum dolor sit amet <br /> consectetur.</small>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-primary to-secondary rounded-2xl flex p-4'>
                    <img src={icon3} alt="" />
                    <div className='ml-5'>
                        <h1>Contact us now</h1>
                        <small> Lorem ipsum dolor sit amet <br /> consectetur.</small>
                    </div>
                </div>
                </div>
            </div>
            <Service></Service>
            <Doctor></Doctor>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;