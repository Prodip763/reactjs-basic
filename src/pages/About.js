import React, { useState } from 'react';

const About = () => {
    // const [number, setNumber] = useState(0);
    const [num, setNum] = useState(0);
    return (
        <div className='flex justify-center gap-4'>

            <h2>This is about {num}</h2>
            <button onClick={() =>{setNum(num + 1)}}> + </button>
            <button onClick={() =>{setNum(num > 0 ? num -1 : 0)}}> - </button>
        </div>
    );
};

export default About;