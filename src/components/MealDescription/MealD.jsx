/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MealD = (props) => {
    const { idMeal, strMealThumb,strInstructions,strMeal} = props.m;
    const navigate = useNavigate();

    const handleNav=()=>{
        navigate(-1);
    }
    return (
       <div>
         <div className='my-12 mx-5 md:flex gap-30 justify-between '>
            <div>
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter purple hover:grayscale-0">


                <img className='h-2/5 max-w-lg rounded-lg'src={strMealThumb} alt="" />
                </figure>
                </div>
            <div className='md:pl-32 pr-5 ml-6'>
                <p>How to make: <span className='font-serif text-2xl'>{strMeal}</span></p>
                <p><small>{strInstructions}</small></p>
                </div>
        </div>
        <button className='text-center text-2xl px-2 py-2 mb-5 rounded-lg mx-12 bg-red-700' onClick={handleNav}>previous</button>
       </div>
    );
};

export default MealD;