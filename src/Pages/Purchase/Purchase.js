import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
  const [product, setProduct] = useState([]);
  const [user] = useAuthState(auth);
  const { productId } = useParams();
  const { _id, name, img, price, minimumQuantity, availableQuantity, description } = product;

  useEffect(() => {
    const url = `https://frozen-dawn-70899.herokuapp.com/products/${productId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [productId]);

  const handleOrder = (event) => {
    const quantity = event.target.quantity.value;
    const phone = event.target.phone.value;
    event.preventDefault();

    const order = {
      orderId: _id,
      name: user.displayName,
      orderEmail: user.email,
      phone: phone,
      orderName: name,
      orderQuantity: quantity,
    }

    if (quantity <= availableQuantity && quantity >= minimumQuantity) {
      fetch(`https://frozen-dawn-70899.herokuapp.com/order`, {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(order)
      })
        .then(res => res.json())
        .then(data => {
          toast.success(`Order successful`)
        })
      event.target.reset();
    } else {
      toast.warning(`you have to select more then ${minimumQuantity} and less then ${availableQuantity}`);
      event.target.reset();
    }
  }

  return (
    <div className="hero min-h-screen my-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div>
            <form className='card-body' onSubmit={handleOrder}>
              <input type="text" readOnly value={user?.displayName} className="input input-bordered w-full max-w-xs" />
              <input type="email" readOnly value={user?.email} className="input input-bordered w-full max-w-xs" />
              <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />
              <input type="text" readOnly value={name} className="input input-bordered w-full max-w-xs" />
              <input type="number" name='quantity' placeholder='Product Quantity' className="input input-bordered w-full max-w-xs" required />
              <input type="submit" value="Order" className="btn btn-primary w-full max-w-xs" />
            </form>
          </div>
        </div>

        <div className="text-center lg:text-left" style={{ maxWidth: "550px" }}>
          <div className='card bg-base-100 shadow-xl'>
            <img src={img} alt='Shoes' className='rounded-2xl m-5' />
            <div className='card-body'>
              <h2 className='card-title'>{name}</h2>
              <p className='font-bold'>Price-${price}</p>
              <p className='font-bold'>Min-Quantity-{minimumQuantity}</p>
              <p className='font-bold'>Max-Quantity-{availableQuantity}</p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Purchase;
