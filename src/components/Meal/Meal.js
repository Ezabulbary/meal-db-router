import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const { strMeal, strInstructions, strMealThumb } = props.meal;
    const { handleAddToOrder, meal } = props;
    return (
        <div className="meal">
            <h1>This is our Meal section</h1>
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0, 100)}</p>
            <button onClick={() => handleAddToOrder(meal)}>Add this Food</button>
        </div>
    );
};

export default Meal;