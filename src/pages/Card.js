import React from 'react';

const Card = ({d}) => {
    const{strMeal} = d;
    return (
        <div>
            <h2>name:{strMeal}</h2>
        </div>
    );
};

export default Card;