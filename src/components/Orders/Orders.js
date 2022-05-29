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
        <div key={order._id}>{order.tool} </div>
      ))}
    </div>
  );
};

export default Orders;
