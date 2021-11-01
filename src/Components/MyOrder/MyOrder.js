import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {
    const {user} = useAuth();
    const [orders,setOrders] = useState([]);
    const [myorders,setMyorders] = useState([]);

    useEffect( () => {
        
         fetch("https://evil-cat-68870.herokuapp.com/addbooking")
        .then(res => res.json())
        .then(data => {
            setOrders(data);
            // const remaining = myorders.filter(order => console.log(order.email));
            // setMyorders(remaining);
        })
    },[])

   
       const handleDelete = () =>{
        const remaining = orders.filter(order => order.email === user.email);
        setMyorders(remaining);
    }
       
   
    return (
        <div>
           <div className="text-center">
           <button className="bg-green-600 py-1 px-6 text-gray-100 mt-2 rounded" onClick={() => handleDelete()}> Refresh</button>

           </div>
            {
                myorders.map(myorder => <div className="flex mx-auto my-4 gap-8">
                <img src={myorder.img} alt="" />
                <div>
                    <h2 className="text-2xl font-bold my-8 text-indigo-800">{myorder.service}</h2>
                <p> Booked by: {myorder.name}</p>
                
                
                </div>
            </div>)
            }
        </div>
    );
};

export default MyOrder;