import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

import auth from "../../firebase.init";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  


  useEffect(() => {
    fetch("https://fathomless-spire-40584.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
    

  }, [user]);

  const handleCencelOrder = (id) => {
    const proceed = window.confirm(
      "are you sure you want to delete this item?"
    );
    if (proceed) {
      const url = `https://fathomless-spire-40584.herokuapp.com/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
          toast("item deleted successfully");
        });
    }
  };


  return (
    <div>
      <h2 className="text-center my-6">Customer Order: {orders?.length} </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
        {orders?.map((order) => (
        <div key={order._id}>
          <div className="card w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Item Name: {order.name}</h2>
              <p>Email: {order.email}</p>
              <p>Quantity: {order.quantity}pcs</p>
              <div className="card-actions justify-center">
                <button onClick={() => handleCencelOrder(order._id)} className="btn btn-primary">Cencel</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default Orders;
