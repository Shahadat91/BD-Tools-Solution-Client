import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='bg-gray-700'>

            <h1 className='text-center my-5 text-white'>My Portfolio</h1>
        <div className='lg:flex items-center justify-around'>
            <div className=' py-14 px-8'>
                    <p className='text-white'>Name: <span className='text-red-500 text-xl'>Shahadat Hossain</span></p>
                    <p className='text-white'>Email: <span className='text-red-500 text-xl'>shahadat20000@gmail.com</span></p>
                    <p className='text-white'>Address: <span className='text-red-500 text-xl'>Ka-206, Boatghat, Namapara, Khilkhet, Dhaka-1229.</span></p>
                    <p className='text-white'>Education: <span className='text-red-500 text-xl'>University of South Asia.</span></p>
                </div>
                <div className='text-white'>
                <h4>Web Design: <span className='text-red-500 text-xl'><progress class="progress progress-success w-80" value="40" max="100"></progress></span></h4>
                    <h4>React Js: <span className='text-red-500 text-xl'><progress class="progress progress-success w-80" value="60" max="100"></progress></span></h4>
                    <h4>MongoDB: <span className='text-red-500 text-xl'><progress class="progress progress-success w-80" value="50" max="100"></progress></span></h4>
                    <h4>CSS: <span className='text-red-500 text-xl'><progress class="progress progress-success w-80" value="75" max="100"></progress></span></h4>
                    <h4>Bootstrap 5: <span className='text-red-500 text-xl'><progress class="progress progress-success w-80" value="95" max="100"></progress></span></h4>
                    <h4>Tailwind: <span className='text-red-500 text-xl'><progress class="progress progress-success w-80" value="55" max="100"></progress></span></h4>
                    <h4>DaisyUi: <span className='text-red-500 text-xl'><progress class="progress progress-success w-80" value="45" max="100"></progress></span></h4>
                </div>

        </div>
        </div>
    );
};

export default MyPortfolio;