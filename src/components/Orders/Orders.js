import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const getOrder = async () => {
    const email = user?.email;
    const url = `https://fathomless-spire-40584.herokuapp.com/order?email=${email}`;
    try {
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setOrders(data);
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 401 || error.response.status === 403) {
        signOut(auth);
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    // fetch("https://fathomless-spire-40584.herokuapp.com/order")
    //   .then((res) => res.json())
    //   .then((data) => setOrders(data));
    getOrder()

  }, [user]);


  return (
    <div>
      <h2 className="text-center my-6">Customer Order: {orders?.length} </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
        {orders?.map((order) => (
        <div key={order._id}>
          <div class="card w-96 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Item Name: {order.name}</h2>
              <p>Email: {order.email}</p>
              <p>Quantity: {order.quantity}pcs</p>
              <div class="card-actions justify-center">
                <button class="btn btn-primary">Cencel</button>
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
