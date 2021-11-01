import React, { useEffect, useState } from 'react';
import Card from './Card';

const Service = () => {
    
    const [services,setServices] = useState([]);
    useEffect(() => {
        
        fetch("https://evil-cat-68870.herokuapp.com/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section>
            <h1 className="text-2xl text-center my-4 font-bold text-green-700">Our Services</h1>
            <div className="grid md:grid-cols-3 grid-cols-1">
            
            {
                services.map(service => <Card detail = {service}></Card>)
            }
        </div>
        </section>
    );
};

export default Service;