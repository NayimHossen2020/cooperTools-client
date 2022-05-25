import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import axios from 'axios';

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const url = `http://localhost:5000/products/services`;

    axios.post(url, data)
      .then(res => {
        const { data } = res;
        if (data.insertedId) {
          toast('Data add successful');
          e.target.reset();
        }
      })
  };

  return (
    <div className='w-[70%] mx-auto'>
      <h2 className='text-center mb-3 text-primary text-2xl'>Add Review</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <input className='input input-bordered w-full max-w-xs' placeholder='name' {...register("name")} required />
        <input className='input input-bordered w-full max-w-xs' placeholder='email' {...register("email")} value={user.email} readOnly required />
        <input className='input input-bordered w-full max-w-xs' placeholder='Price' type="number" {...register("price")} required />
        <input className='input input-bordered w-full max-w-xs' placeholder='quantity' type="number" {...register("quantity")} required />
        <input className='input input-bordered w-full max-w-xs' placeholder='supplier' {...register("supplier")} required />
        <textarea className='input input-bordered w-full max-w-xs' placeholder='description' {...register("description")} required />
        <input className='input input-bordered w-full max-w-xs' placeholder='img' {...register("img")} required />
        <input className='btn btn-primary w-full max-w-xs' type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;