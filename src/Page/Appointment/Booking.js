
import { format } from 'date-fns';
import React from 'react';

const Booking = ({ data, date, setData }) => {
    const { name, slots } = data

    const dateTime = format(date, 'PP')

    const handleBooking = event =>{
        event.preventDefault()
        const form = event.target 
        const phone = form.phone.value 
        const email = form.email.value 
        const slot =form.slot.value
        const names = form.name.value
        const booking = {
            appointmentDate : dateTime,
            names,
            email,
            phone,
            time: slot,
            serviceName: name,
        

        }
        console.log(booking)
        setData(null)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" disabled value={dateTime} className="mt-2 input input-bordered w-full " /> <br />
                        <select name='slot' className="select select-bordered w-full mt-2">
                        
                        {
                            slots.map(slot => <option  value={slot}>{slot}</option>)
                        }
                        </select> <br />
                        <input name='name' type="text" placeholder="Type here" className=" mt-3 input input-bordered w-full "  required /> <br />
                        <input name='email' type="text" placeholder="Type here" className=" mt-3 input input-bordered w-full " required /> <br />
                        <input name='phone' type="text" placeholder="Type here" className=" mt-3 input input-bordered w-full " required /> <br />
                        <button className="btn btn-primary mt-3 w-full">Button</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Booking;