import React from 'react';

const ProductsRow = ({ product, index, refetch, setDeletingProduct }) => {
    const { name, img, email } = product;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                <label onClick={() => setDeletingProduct(product)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr >
    );
};

export default ProductsRow;