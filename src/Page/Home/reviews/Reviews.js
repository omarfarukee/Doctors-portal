import React from 'react';
import img from '../../../assets/icons/quote.svg'
import img2 from '../../../assets/images/people1.png'
import img3 from '../../../assets/images/people2.png'
import img4 from '../../../assets/images/people3.png'
const Reviews = () => {
    return (
        <div>
            <div className='mt-5 items-center flex justify-between'>
                <div className=''>
                    <h1>Testimonial</h1>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='h-36' src={img} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3'>
                <div className=' shadow-2xl p-7 rounded-2xl'>
                <div>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                </div>
                <div className='flex items-center mt-3'>
                    <div className="avatar">
                    <div className=" h-16 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                        <img alt='' className='' src={img2} />
                    </div>
                </div>
                <div className='ml-5'>
                    <h2>khabib khan</h2>
                    <p>USA</p>
                </div>
            </div>
                </div>
                <div className=' shadow-2xl p-7 rounded-xl'>
                <div>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                </div>
                <div className='flex items-center mt-3'>
                    <div className="avatar">
                    <div className=" h-16 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                        <img alt='' className='' src={img3} />
                    </div>
                </div>
                <div className='ml-5'>
                    <h2>khabib khan</h2>
                    <p>USA</p>
                </div>
            </div>
                </div>
                <div className=' shadow-2xl p-7 rounded-2xl'>
                <div>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                </div>
                <div className='flex items-center mt-3'>
                    <div className="avatar">
                    <div className=" h-16 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                        <img alt='' className='' src={img4} />
                    </div>
                </div>
                <div className='ml-5'>
                    <h2>khabib khan</h2>
                    <p>USA</p>
                </div>
            </div>
                </div>
        </div>
        </div >

    );
};

export default Reviews;