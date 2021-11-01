import React from 'react';
import { Link } from 'react-router-dom';


const Cart = (props) => {
    const {name,details,price,img,_id} = props.detail
    return (
        <div>
             <div className="flex flex-col bg-gray-100 justify-center items-center w-72 h-96 p-4 mx-auto shadow-2xl mb-8">
                    <img src={img} alt="" className="w-64 h-52 rounded" />
                    <h3 className="text-gray-800 text-xl text-center mb-2 font-bold">{name}</h3>
                    <p className="text-center text-sm text-gray-600">{details}</p>
                    <div className="flex ">
                        <p>Price : <span className="text-sm font-semibold text-purple-800">${price}</span></p>
                        
                    </div>
                    <button className="bg-green-700 py-1 px-6 text-gray-100 mt-2 rounded"><Link to={`/details/${_id}`}>Book now</Link></button>
            </div>
               
        </div>
    );
};

export default Cart;








