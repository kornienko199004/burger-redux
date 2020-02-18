import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map((key) => {
            const result = [...Array(props.ingredients[key])].map((_, i) => {
                return <BurgerIngredient key={key + i} type={key} />
            });
            return result;
        }).reduce((acc, item) => {
            // return [...acc, ...item];
            return acc.concat(item);
        }, []);
        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start addign ingredients!</p>;
        }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;