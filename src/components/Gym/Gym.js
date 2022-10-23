import React from 'react';
import './Gym.css'

const Gym = ({gymActivity,handleAddToCart}) => {
    const {name,Time,img}=gymActivity;
   
    
    
    //console.log(props.gym)
    return (
        <div className='gym'>
           <img src={img}  alt></img>
          <div className='gym-info'>
          <p className='name'>Name:{name}</p>
           <p>Time: {Time} min</p>
          </div>
          <button onClick={() => handleAddToCart(gymActivity)} className='btn-cart'><p>Add to List</p></button>
            
        </div>
    );
};

export default Gym;