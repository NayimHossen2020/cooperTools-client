import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import PageTitle from "./../Shared/PageTitle";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://frozen-dawn-70899.herokuapp.com/order?email=${user?.email}`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem('accessToken');
          navigate('/')
        }
        return res.json()
      })
      .then(data => {
        setOrders(data)
      })
  }, [user])

  return (
    <div>
      <PageTitle title="MyOrders"></PageTitle>
      <h2>This is My Order: {orders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Product Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order, index) => <tr key={index}>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.orderEmail}</td>
                <td>{order.orderName}</td>
                <td>{order.orderQuantity}</td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
