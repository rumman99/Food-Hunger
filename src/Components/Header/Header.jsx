import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../imgs/logo7.png'
import bg from '../../imgs/background.jpg'
import '../Header/header.css'
import FoodChoice from '../FoodChoice/FoodChoice';


const Header = () => {
    return (
        <>
        <div className='lg:flex justify-around pt-5 max-sm:flex bg-green-300'>
            <div className='h-auto w-16 mr-96 -mt-5'><img src={Logo}/>
            </div>
            <div className=''>
                <div className='lg:ml-96'>
                    <FontAwesomeIcon icon={faCartShopping}/>
                    <button className='pl-3'>Login</button>
                    <button className='ml-3 bg-blue-700 hover:bg-blue-500 text-white py-1 px-2 rounded-full'>Sign up</button></div>
                
            </div>
        </div>
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bg})` }} className="header">
            <h3 className='text-center text-yellow-500 text-5xl mt-40'>Best Food Waiting for YOU!!!</h3>
        </div>
        <FoodChoice/>
        </>
    );
};

export default Header;