import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const AddProduct = () => {

  const imgbbStorageKey = `17cff9a2ec79367bea2e84bf7b3aa508`;

  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const image = data.img[0];

    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url;
          const review = {
            name: data.name,
            email: data.email,
            rating: data.rating,
            review: data.review,
            img: img
          }
          // send to your database 
          fetch('https://frozen-dawn-70899.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
          })
            .then(res => res.json())
            .then(inserted => {
              if (inserted.insertedId) {
                toast.success('review added successfully')
              }
              else {
                toast.error('Failed to add the reviews');
              }
            })

        }

      })
  };

  return (
    <div className='w-[70%] mx-auto'>
      <h2 className='text-center mb-3'>Add Item</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <input className='input input-bordered w-full max-w-xs' value={user?.displayName} placeholder='name' {...register("name")} required />
        <input className='input input-bordered w-full max-w-xs' placeholder='email' {...register("email")} value={user.email} readOnly />
        <input className='input input-bordered w-full max-w-xs' placeholder='rating' type="number" {...register("rating")} required />
        <input className='input input-bordered w-full max-w-xs' placeholder='review' {...register("review")} required />
        <input className='input input-bordered w-full max-w-xs' type='file' {...register("img")} required />
        <input className='btn btn-primary w-full max-w-xs' type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;