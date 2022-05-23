import React, { useState } from 'react';
import { useEffect } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    return (
        <div className='container mx-auto my-10'>
            <h1 className='my-5 text-center'>Our Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product key={product._id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default Products;