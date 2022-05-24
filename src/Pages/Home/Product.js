import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({ product }) => {
  const { _id, name, img, price, minimumQuantity, availableQuantity, description } = product
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/purchase/${id}`)
  };

  return (
    <div className='card bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img src={img} alt='Shoes' className='rounded-xl' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p className='font-bold'>Price-${price}</p>
        <p className='font-bold'>Min-Quantity-{minimumQuantity}</p>
        <p className='font-bold'>Max-Quantity-{availableQuantity}</p>
        <p>{description}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary' onClick={() => handleNavigation(_id)}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
