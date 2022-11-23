
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Context/AuthProvider';

const Booking = ({ data, date, setData, refetch }) => {
    const { name, slots } = data
    const {user} = useContext(AuthContext)
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

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers:{
                'content-type' : 'application/json'
            }, 
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.acknowledged === true) {
                setData(null)
                //  toast.success('booking confrimed')
                alert('booking successfull')
                 refetch()
                // toast('Booking confrimed', {
                //     position: "top-right",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "light",
                //     });

            }
             else {
                alert('you have already booked')
             }
        })

       
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
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Type here" className=" mt-3 input input-bordered w-full "  required /> <br />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="email" className=" mt-3 input input-bordered w-full " required /> <br />
                        <input name='phone' type="text" placeholder="phone" className=" mt-3 input input-bordered w-full " required /> <br />
                        <button className="btn btn-primary mt-3 w-full">Button</button>
                        <ToastContainer></ToastContainer>
                        {/* <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                            /> */}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Booking;