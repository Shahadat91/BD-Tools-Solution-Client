import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect( () =>{
        fetch('https://fathomless-spire-40584.herokuapp.com/tool')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
    return (
        <div>
            <h2 className='text center'>Our Tools </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
            {
                tools.map(tool =><Tool key={tool._id} tool={tool}></Tool>)
            }

            </div>
        </div>
    );
};

export default Tools;