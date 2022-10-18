import React from 'react';
import './Gym.css'

const Gym = (props) => {
    const {name,Time,img}=props.gym;
    
    //console.log(props.gym)
    return (
        <div className='gym'>
           <img src={img}  alt></img>
          <div className='gym-info'>
          <p className='name'>Name:{name}</p>
           <p>Time:{Time}</p>
          </div>
          <button className='btn-cart'><p>Add to Cart</p></button>
            
        </div>
    );
};

export default Gym;