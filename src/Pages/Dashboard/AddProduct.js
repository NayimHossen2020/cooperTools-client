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
                    const product = {
                        name: data.name,
                        email: data.email,
                        price: data.price,
                        availableQuantity: data.availableQuantity,
                        minimumQuantity: data.minimumQuantity,
                        description: data.description,
                        img: img
                    }
                    // send to your database 
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('product added successfully')
                            }
                            else {
                                toast.error('Failed to add the product');
                            }
                        })

                }

            })
    };

    return (
        <div className='w-[70%] mx-auto'>
            <h2 className='text-center mb-3'>Add Item</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <input className='input input-bordered w-full max-w-xs' placeholder='product name' {...register("name")} required />
                <input className='input input-bordered w-full max-w-xs' placeholder='email' {...register("email")} value={user.email} readOnly />
                <input className='input input-bordered w-full max-w-xs' placeholder='Price' type="number" {...register("price")} required />
                <input className='input input-bordered w-full max-w-xs' placeholder='availableQuantity' type="number" {...register("availableQuantity")} required />
                <input className='input input-bordered w-full max-w-xs' placeholder='minimumQuantity' type="minimumQuantity" {...register("minimumQuantity")} required />
                <textarea className='input input-bordered w-full max-w-xs' placeholder='description' {...register("description")} required />
                <input className='input input-bordered w-full max-w-xs' type='file' {...register("img")} required />
                <input className='btn btn-primary w-full max-w-xs' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;