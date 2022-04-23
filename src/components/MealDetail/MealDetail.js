import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const {mealDetail} = useParams();
    const [meal, setMeal] = useState({});
    console.log(meal)

    useEffect( () => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDetail}`;
        fetch(url)
        .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [])

    return (
        <div>
            <h1 className='text-2xl text-center m-8'><span className='font-bold'>{meal.strMeal}</span> Details</h1>
            <div className='text-center'>
                <img className='m-auto' src={meal.strMealThumb} alt="mealImage" />
                <p className='text-justify p-8'>{meal.strInstructions}</p>
                <a className='text-center bg-gray-200 hover:bg-red-400 rounded p-2 m-2' href={meal.strSource} target='_blank' rel="noreferrer">Source</a>
                <a className='text-center bg-gray-200 hover:bg-red-400 rounded p-2 m-2' href={meal.strYoutube} target='_blank' rel="noreferrer">Youtube</a>
            </div>
        </div>
    );
};

export default MealDetail;