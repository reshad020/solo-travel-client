import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateBooking = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const [singleService,setSingleService] = useState({});
    useEffect(() =>{
        fetch(`https://evil-cat-68870.herokuapp.com/services/${id}`)
        .then(res => res.json())
        .then(data => setSingleService(data))
    },[])

    const handleBooking = () =>{
        axios.post('https://evil-cat-68870.herokuapp.com/addbooking', {
        name :`${user.displayName}`,
        service :`${singleService.name}`,
        img : `${singleService.img}`,
        email : `${user.email}`
       
      })
      .then(function (response) {
        console.log(response);
      })
    }
    return (
        <div className="text-center">
            <div className="flex justify-center items-center">
            <img src={singleService.img} alt="" />
            </div>
            <h2 className="my-8 text-center text-2xl font-semibold text-indigo-8n00">{singleService.name}</h2>
            <h2 className="my-8 text-center text-2xl font-bold ">Booked by {user.displayName}</h2>
            <button className="bg-green-700 py-1 px-6 text-gray-100 mt-2 rounded" onClick={handleBooking}><Link to="/home">Confirm Booking</Link></button>
        </div>
    );
};

export default PrivateBooking;