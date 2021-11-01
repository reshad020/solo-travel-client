import React, { useEffect, useState } from 'react';


const ManageOrders = () => {
    const [orders,setOrders] = useState([]);
    useEffect(() => {
        
        fetch("http://localhost:4000/addbooking")
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

    const handleDelete = id =>{
        const url = `http://localhost:4000/addbooking/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            const remaining = orders.filter(order => order._id !== id);
            setOrders(remaining);
        })
    }
    return (
        <div className="grid">
            {
                
                orders.map(order => <div className="flex mx-auto my-4 gap-8">
                        <img src={order.img} alt="" />
                        <div>
                            <h2 className="text-2xl font-bold my-8 text-indigo-800">{order.service}</h2>
                        <p> Booked by: {order.name}</p>
                        <p> Status: <span className="text-pink-600 font-semibold">Pending</span></p>
                        <button className="bg-pink-600 py-1 px-6 text-gray-100 mt-2 rounded" onClick={() => handleDelete(order._id)}> DELETE</button>

                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ManageOrders;