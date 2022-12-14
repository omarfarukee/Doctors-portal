import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
// import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Loader/Loader';

const AddDoctor = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHosKey = '29473dd4ab78ebc95009722bc0558d38';
    console.log(imageHosKey)
    const navigate = useNavigate()
    const {data: specialties , isLoading} = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty')
            const data = await res.json();
            return data
        }
    })

    const handleDoctor = (data) => {
        console.log(data)
        const image = data.image[0];
        const fromData = new FormData();
        fromData.append('image', image);
        const url= `https://api.imgbb.com/1/upload?expiration=600&key=${imageHosKey}` 
        fetch(url, {
            method: 'POST',
            body: fromData
        })
        .then(res => res.json()) 
        .then(imgData => {
          if(imgData.success){
            console.log(imgData.data.url)
            const doctor = {
                name : data.name ,
                email : data.email,
                specialty: data.specialty,
                image: imgData.data.url
            }

            //  save doctor information to the database 
            fetch('http://localhost:5000/doctors', {
                method: 'POST', 
                headers: {
                    'content-type': 'application/json', 
                    authorization : `bearer ${localStorage.getItem('accessToken')}`

                }, 
                body: JSON.stringify(doctor)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert('added doctor successfully')
                toast.success('added successfully')
                navigate('/dashboard/manageDoctor')
            })

          }
        })
    }
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div className='w-96 '>
            <h1 className='text-2xl'>add Doctor</h1>
            <form onSubmit={handleSubmit(handleDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Specialty</span></label>
                    <select
                    {...register('specialty')}
                    className="select select-bordered w-full max-w-xs">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id} 
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }
                        
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Doctor" type="submit" />
                {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
            </form>
        </div>
    );
};

export default AddDoctor;