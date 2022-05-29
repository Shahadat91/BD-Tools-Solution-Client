import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import useToolDetails from '../../hooks/useToolDetails';

const ProceedOrder = () => {
    const {toolId} = useParams();
    const [tool] = useToolDetails(toolId);
    const [user] = useAuthState(auth);

    const handleProceedOrder = (event) =>{
        event.preventDefault();
        const order ={
            email: user.email,
            name: tool.name,
            toolId: toolId,
            quantity: event.target.quantity.value,
            address: event.target.address.value,
            phone: event.target.phone.value,

        }
     
        axios.post('https://fathomless-spire-40584.herokuapp.com/order', order)
        .then(response =>{
            console.log(response);
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked!! see you soon');
                event.target.reset();
            }
        })
       

    }

    return (
        <div className='justify-center items-center text-center'>
            <h2>Proceed Your Order</h2>
            <h2>Please Order: {tool.name}</h2>
            <form className='w-50 mx-auto text-center' onSubmit={handleProceedOrder}>
                <input className='mb-3 w-100' type="text" name="name" id="" value={user?.displayName} placeholder='name' required readOnly disabled />
                <br />
                <input className='mb-3 w-100' type="email" name="email" id="" value={user?.email} placeholder='email' required readOnly disabled />
                <br />
                <input className='mb-3 w-100' type="text" name="tool" value={tool.name} id="" placeholder='tool' required readOnly disabled />
                <br />
                <input className='mb-3 w-100' type="text" name="quantity" id="" placeholder='quantity' autoComplete='off' required />
                <br />
                <input className='mb-3 w-100' type="text" name="address" id="" placeholder='address' autoComplete='off' required />
                <br />
                <input className='mb-3 w-100' type="number" name="phone" id=""  placeholder='phone number' required />
                <br />
                <input className='btn btn-secondary ' type="submit" value="Place Order" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default ProceedOrder;