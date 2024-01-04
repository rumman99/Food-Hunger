import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { foods } from '../../foodData/foodData';
import Foods from '../Foods/Foods';

const DetailsOfFood = () => {
    const {foodId}= useParams();
    const [food, setFood]= useState(foods);    
    
        const foodWithIdMatch= food.find(allFood=> allFood === 2)
        console.log();
        // const {title, body}= foodWithIdMatch;
    console.log(foodWithIdMatch);
    return (
        <div>
            <div>
                <h1>ID: {foodId}</h1>
                {/* <Foods foods={foodWithIdMatch}></Foods> */}
                <button>Add to Cart</button>
            </div>
            <div>
                <img src="" alt="" />
            </div>
            
        </div>
    );
};

export default DetailsOfFood;