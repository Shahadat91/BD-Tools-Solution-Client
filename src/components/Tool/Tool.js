import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const {_id,name, img, price,description} = tool;
    const navigate = useNavigate();
    const navigateToPurchaseTool = (id) =>{
        navigate(`/tool/${id}`);
    }
    return (
        <div class="card shadow-xl">
        <figure class="px-10 pt-10">
          <img className='w-36 rounded-xl' src={img} alt="img"/>
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <p>Price: {price}</p>
          <div class="card-actions">
            <button onClick={() =>navigateToPurchaseTool(_id)} class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Tool;