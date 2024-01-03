/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MealD from '../MealDescription/MealD';

const MealDetails = () => {
    const {mealId} =useParams();
    // console.log(mealId)

    const [meal,setMeal]= useState([]);
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.meals)
            setMeal(data.meals)
        })
    },[mealId])
    
    return (
        <div>
            
        {
            meal.map(m=><MealD m={m}
                key ={meal.idMeal}
            ></MealD>)
        }
            
        </div>
    );
};

export default MealDetails;