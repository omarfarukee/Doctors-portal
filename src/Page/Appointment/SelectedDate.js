import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import ServiceCard from './ServiceCard';
import Booking from './Booking';
const SelectedDate = ({date}) => {
    const [services, setServices] = useState([])
    const [data , setData]= useState(null)
    useEffect(() =>{
        fetch('Service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center text-pink-500 font-bold'>
                      <p>your selected date : {format(date, 'PP')}</p>
            </div>
            <div className='mt-7 grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    setData={setData}
                    ></ServiceCard>)
                }
            </div>
          { data &&
           <Booking
            data={data}
            date={date}
            setData= {setData}
            ></Booking>
            }
        </div>
    );
};

export default SelectedDate;