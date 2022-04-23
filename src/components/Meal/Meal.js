import React from 'react';
import { useNavigate } from 'react-router-dom';

const Meal = ({ meal }) => {
    const { strMeal, strInstructions, strMealThumb } = meal;

    const naviget = useNavigate()

    const handleAddToDetail = () => {
        naviget(`/meal/${meal.idMeal}`)
    }
    
    return (
        <div className="p-4 bg-white rounded">
            <img className='m-auto w-52' src={strMealThumb} alt="mealImage" />
            <h4 className='font-bold'>{strMeal}</h4>
            <p className='text-justify'>{strInstructions.slice(0, 100)}...</p>
            <button className='bg-gray-200 hover:bg-green-400 rounded p-2 m-2' onClick={() => handleAddToDetail(meal)}>Add this Food</button>
        </div>
    );
};

export default Meal;