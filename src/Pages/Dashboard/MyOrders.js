import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import PageTitle from "./../Shared/PageTitle";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/order?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [user])

  return (
    <div>
      <PageTitle title="MyOrders"></PageTitle>
      <h2>This is My Order: {orders.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
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
              orders.map((order, index) => <tr>
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
