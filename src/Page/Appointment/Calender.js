import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'

import { DayPicker } from 'react-day-picker';
import img from '../../assets/images/bg.png'
import SelectedDate from './SelectedDate';
const Calender = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <div className="hero lg:pt-16 lg:pb-16  rounded-2xl" style={{backgroundImage:`url(${img})`, backgroundSize:'cover'}}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src={chair} className=" h-64 rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker  mode="single"
                        selected={date}
                        onSelect={setDate}/>

                    </div>
                </div>
              
            </div>
              <SelectedDate
                date={date}
                ></SelectedDate>
        </div>
    );
};

export default Calender;