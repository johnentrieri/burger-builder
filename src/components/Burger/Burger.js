import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {

    let transformedIngredients = [];
    const ingredientKeys = Object.keys(props.ingredients);

    for (let i=0 ; i < ingredientKeys.length ; i++) {
        for (let j=0 ; j < props.ingredients[ingredientKeys[i]] ; j++) {
            transformedIngredients.push(
                <BurgerIngredient type={ingredientKeys[i]} key={i + "-" + j} />
            );
        }
    }
    
    if (transformedIngredients.length === 0) {
        transformedIngredients = ( <p>Add Your Ingredients!</p> );
    }


    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="top-bun" />
            {transformedIngredients}
            <BurgerIngredient type="bottom-bun" />
        </div>
    );
};

export default burger;
