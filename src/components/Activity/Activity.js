import React, { useEffect, useState } from 'react';
import Gym from '../Gym/Gym';
import './Activity.css'

const Activity = () => {
    const [gym,setGym] = useState([]);

    useEffect( ()=>{
        fetch('./gym.json')
        .then(res=> res.json())
        .then(data => setGym(data))
    },[])
    return (
        <div className='activity-container'>
           <div className="gym-container">
            {
                gym.map(gymActivity =><Gym key={gym.id}></Gym>)
            }
           </div>
           <div className="activity-details">
           <h2>This is activities details</h2> 
           </div>
        </div>
    );
};

export default Activity;