import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit,reset , formState: { errors } } = useForm();
  const onSubmit = data =>{

//     fetch('http://localhost:4000/services')
//     .then(res=>res.json())
//     .then(data => console.log(data));

//    console.log(data);

   axios.post('https://evil-cat-68870.herokuapp.com/services',data)
   .then(res =>{
       alert("added successfully");
       reset();
   })
}

    return (
        <div>
            <h2 className="text-center text-2xl font-bold">Add a Service</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="text-center">
                <input {...register("name", { required: true })} placeholder="Name" className="ring my-4 w-52"/>
                <br />
                <textarea {...register("details")} placeholder="write details" className="ring my-4 w-52"/>
                <br />
                <input type="number" {...register("price")} placeholder="Price" className="ring my-4 w-52"/>
                <br />
                <input {...register("img")} placeholder="Image url" className="ring my-4 w-52"/>
                <br />
                <input type="submit" className="ring my-4 mx-4 px-2 bg-purple-800 font-bold text-gray-100" />
            </form>
        </div>
    );
};

export default AddService;