import { useState } from 'react';
import { foods } from '../../foodData/foodData';
import Foods from '../Foods/Foods';

const FoodChoice = () => {
    const [food, setFood]= useState(foods);
    const initialState= food.filter(allFood => allFood.category === 'lunch');//for Default State Value//
    const [category, setCategory]= useState(initialState);

    const handleCategory= (whichCategory)=>{
        const whichFood= food.filter(allFood => allFood.category === whichCategory);
        setCategory(whichFood);
    }

    return (
        <>
        <div className='flex justify-evenly font-bold bg-blue-100 pt-10 text-lg'>
                <button className='focus:text-red-700 focus:underline' onClick={()=>handleCategory("breakfast")}>Breakfast</button>
                <button className='focus:text-red-700 focus:underline' onClick={()=>handleCategory('lunch')}>Lunch</button>
                <button className='active:text-red-700 focus:text-red-700 focus:underline' onClick={()=>handleCategory('dinner')}>Dinner</button>
                
        </div>
        <div className='grid grid-cols-3 bg-blue-100 col-span-1 place-items-center pt-8 text-center'>
            {
                category.map(allFood=> <Foods foods={allFood}></Foods>)
            }
        </div>
        </>
    );
};

export default FoodChoice;