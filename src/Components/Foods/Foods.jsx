import React from 'react';

const Foods = ({foods}) => {
    const {title, body, price, img}= foods;
    
    return (
        <div className='pb-10 hover:shadow-2xl shadow-gray-950 p-5'>
            <img className='w-56' src={img}/>
            <div className='mt-4 leading-7'>
                <h1 className='font-medium'>{title}</h1>
                <p>{body}</p>
                <h3 className='font-bold text-xl'>${price}</h3>
            </div>
            
        </div>
    );
};

export default Foods;