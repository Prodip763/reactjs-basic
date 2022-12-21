
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';



const Data = () => {
    const [data, setData] = useState([]);
    useEffect(() =>{
        axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
        .then((res) => setData(res.data.meals));
    }, [])
    return (
        <div>
            <h3>this is data</h3>
            {/* {
                data?.map(d => <div key={d.idMeal}>
                    <p>name:{d.strMeal}</p>
                </div>)
            } */}
            {data?.map(d => <Card key={d.idMeal} d={d}></Card>)}
        </div>
    );
};

export default Data;