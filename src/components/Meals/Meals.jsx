/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = () => {

    // single meal obj
    const [meals,setMeal] =useState([]);

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(res=>res.json())
        .then(data=>setMeal(data.meals))
    },[])


    // meal details
    // const[idMeal,setIdMeal] =useState([]);

    // useEffect(()=>{
        // fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))

    // },[meals])


    return (
        <div className='grid md:grid-cols-3 mx-5 pt-8'>
            {
                meals.map(meal=><Meal
                key={meal.idMeal}
                meal ={meal}
                ></Meal>)
            }
        </div>
    );
};

export default Meals;