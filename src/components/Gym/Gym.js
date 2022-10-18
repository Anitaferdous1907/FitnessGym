import React from 'react';
import './Gym.css'

const Gym = (props) => {
    const {name,Time,img}=props.gym;
    
    //console.log(props.gym)
    return (
        <div className='gym'>
           <img src={img}  alt></img>
           <p className='name'>Name:{name}</p>
           <p>Time:{Time}</p>
        </div>
    );
};

export default Gym;