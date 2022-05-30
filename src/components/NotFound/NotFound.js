import React from 'react';
import img404 from '../../Images/404-img/404.jpg';

const NotFound = () => {
    return (
        <div className='flex items-center justify-center'>
            <img style={{width: '600px'}} src={img404} alt="404-img" />
        </div>
    );
};

export default NotFound;