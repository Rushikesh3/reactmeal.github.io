import React, { Fragment } from "react";
import AvailableMeals from "./AvailabelMeals";
import MealsSummary from "./MealsSummary";

const Meals=(props)=>{
    return <Fragment>
        
        <MealsSummary/>
        <AvailableMeals/>
    </Fragment>
}

export default Meals;