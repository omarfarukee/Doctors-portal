import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';

const ServiceCard = ({ service, setData }) => {
    const { name, slots } = service
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : ' try another day'}</p>
                    <p>{slots?.length > 0 ? slots.length: 'no'} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <div className="card-actions justify-end">
                  
                    <label  onClick={() => setData(service)} htmlFor="booking-modal" className="btn btn-primary" >Book now</label>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;