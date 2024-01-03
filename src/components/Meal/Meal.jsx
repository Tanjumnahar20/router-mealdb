/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
    

    console.log(meal)
    const { strArea, strCategory, idMeal,strMeal } = meal;
    return (
        <div className='border-red-200 border-2 my-5 mx-5 py-4 px-4 text-center rounded'>
            <h4 className='font-medium'> Origin: <span>{strArea}</span></h4>
            <h4 className='font-medium'> type of food: <span >{strCategory}</span></h4>
            <h4 className='font-medium'>Dish name: <span className=' text-rose-800'>{strMeal}</span></h4>
            <Link to={`/meal/${idMeal}`}>
            <button className='bg-orange-600 rounded-lg font-medium mt-4 py-1 px-2'>Show details</button>
            </Link>
        </div>
    );
};

export default Meal;