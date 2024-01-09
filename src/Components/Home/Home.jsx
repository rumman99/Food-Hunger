import React from 'react';
import FoodChoice from '../FoodChoice/FoodChoice';
import bg from '../../imgs/background.jpg'


const Home = () => {
    return (
        <div>
            <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bg})` }} className="header">
            <h3 className='text-center text-yellow-500 text-5xl mt-40'>Best Food Waiting for YOU!!!</h3>
        </div>
        <FoodChoice/>
        </div>
    );
};

export default Home;