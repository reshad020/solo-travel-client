import React from 'react';

const Topbanner = () => {
    return (
        <div className="container mt-20 md:flex mx-auto gap-96">
            <div className="flex justify-center md:ml-20 md:mt-12 items-center w-96">
                <img src="https://www.thestatesman.com/wp-content/uploads/2020/10/iStock-952716620.jpg" alt="" />
            </div>
            <div className="w-72 ">
                <h2 className="font-bold text-2xl mt-12 text-green-700">Let <span className="text-yellow-500">Solo Traveler</span> plan your tours and journeys! </h2>
                <p className="mt-8 text-sm ring shadow-inner text-gray-900 bg-blue-50 p-8">“Travel makes one modest. You see what a tiny place you occupy in the world” – Gustave Flaubert</p>
            </div>
        </div>
    );
};

export default Topbanner;