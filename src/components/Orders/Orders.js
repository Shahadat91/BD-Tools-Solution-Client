import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://fathomless-spire-40584.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <h2>This is Customer Order: {orders?.length} </h2>
      {orders?.map((order) => (
        <div key={order._id}>
          <div class="card w-96 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">{order.name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
