import React from 'react';

const Meal = (props) => {
    const { handleAddToOrder, meal } = props;
    const { strMeal, strInstructions, strMealThumb } = meal;
    
    return (
        <div className="m-6 p-4 bg-white rounded">
            <img className='m-auto w-52' src={strMealThumb} alt="melimage" />
            <h4 className='font-bold'>{strMeal}</h4>
            <p className='text-justify'>{strInstructions.slice(0, 100)}...</p>
            <button className='bg-gray-200 hover:bg-green-400 rounded p-2 m-2' onClick={() => handleAddToOrder(meal)}>Add this Food</button>
        </div>
    );
};

export default Meal;