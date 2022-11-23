import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import ServiceCard from './ServiceCard';
import Booking from './Booking';
import { useQuery } from '@tanstack/react-query';
import Loader from '../Loader/Loader';
const SelectedDate = ({date}) => {
    const [data , setData]= useState(null)
    // const {data: appointmentsOption = [], isLoading} = useQuery({
    //     queryKey: ['appointmentsOptions'], 
    //     queryFn: () => fetch('http://localhost:5000/appointment')
    //     .then(res => res.json())
    // })
    
    const selecteData = format(date, 'PP');
    const {data: appointmentsOption = [], refetch, isLoading} = useQuery({
        queryKey: ['appointmentsOptions'], 
        queryFn: async() =>{
         const res =  await fetch( `http://localhost:5000/appointment?date=${selecteData}`)
         const data = await res.json()
        return data
        }
    })
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        


        <div>
            <div className='text-center text-pink-500 font-bold'>
                      <p>your selected date : {format(date, 'PP')}</p>
            </div>
            <div className='mt-7 grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    appointmentsOption.map(service => <ServiceCard
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
            refetch={refetch}
            setData= {setData}
            ></Booking>
            }
        </div>
    );
};

export default SelectedDate;