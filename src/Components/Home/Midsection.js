import React from 'react';

const Midsection = () => {
    return (
        <section className="bg-gray-900 mt-20 mb-20 p-8">
            <h1 className="font-bold  text-center text-2xl text-gray-200">What we provide?
            </h1>
            <div className="flex justify-center mt-2 mb-8"><hr className=" w-52 ring "  /></div>
            
            <div className = "grid md:grid-cols-3  grid-cols-1">
                <div className="w-80 mx-auto my-4">
                    <img src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t1.6435-9/s960x960/121933630_1054712611615383_3971868727732015981_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeEew7oldR_o5_fBmsSV_Gz5TYbj30kUn-pNhuPfSRSf6ptTrITx6HrbcD94WLxImiwiZurVJcTV0tmrYZDfjrXh&_nc_ohc=tsg0c49xnOAAX9mU6I3&_nc_ht=scontent.fjsr6-1.fna&oh=ab30103f5ff6e5407522cfaf3f53b794&oe=61A21A7C" alt="" class="w-80 h-52" />  
                    <p className="mt-4 text-gray-400 text-sm font-semibold">We provide best tour plans for you with cool discount offers in every season. Our first priority is traveler's comfort.All our plans are comfortable and affordable. </p>
                </div>
                <div className="w-80 mx-auto my-4">
                    <img src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t1.6435-9/79657254_2507592292887088_6033054322042863616_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFUY4kxI_PrRoJtQ7xgEDQ0D_YZTlGTzscP9hlOUZPOxwhHp77DoVTeox9yux3V45L7_NUvr2MSXPPwTJY8SBt6&_nc_ohc=ikfFYxO0fxkAX8jG25M&_nc_ht=scontent.fjsr6-1.fna&oh=28edd987bb57b9cfa9b29dd3f6175efb&oe=61A2AB37" alt="" class="w-80 h-52" />  
                    <p className="mt-4 text-gray-400 text-sm font-semibold">We provide best tour plans for you with cool discount offers in every season. Our first priority is traveler's comfort.All our plans are comfortable and affordable.  </p>
                </div>
                <div className="w-80 mx-auto my-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPcWkhrAfxMwgGHiJQ_6otvjYswUl3iGS4Q&usqp=CAU" alt="" class="w-80 h-52" />  
                    <p className="mt-4 text-gray-400 text-sm font-semibold">We provide best tour plans for you with cool discount offers in every season. Our first priority is traveler's comfort.All our plans are comfortable and affordable. </p>
                </div>
            </div>    
        
        </section>
    );
};

export default Midsection;