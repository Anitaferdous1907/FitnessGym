import React, { useEffect, useState } from 'react';
import Gym from '../Gym/Gym';
import './Activity.css'



const Activity = () => {
    const [gym,setGym] = useState([]);
const [cart,setCart]=useState([])    

    useEffect( ()=>{
        fetch('./gym.json')
        .then(res=> res.json())
        .then(data => setGym(data))
    },[])
    const handleAddToCart =(gymActivity)=>{
        console.log(gymActivity)
        const newCart = [...cart,gymActivity];
        setCart(newCart);
    }

    return (
        <div className='activity-container'>
           <div className="gym-container">
            {
                gym.map(gymActivity =><Gym key={gymActivity.id} gymActivity={gymActivity} handleAddToCart={handleAddToCart} ></Gym>)
            }
           </div>
           <div className="activity-details">
           <div className='profile'>
        
            <h1> Anita Ferdous</h1>
            <p>dhaka,Bangladesh</p>
           </div>
           <div className='personal-info'>
            <div>
            <p>weight</p>
            <h4>90kg</h4>
            </div>
            <div>
                <p>height</p>
                <h4>5'5</h4>
            </div>
            <div>
                <p>Age</p>
                <h4>25 Years</h4>
            </div>
           </div>
           <h3>Add break</h3>
           <div className='btn'>
            <button>10s</button>
            <button>20s</button>
            <button>30s</button>
            <button>40s</button>
            <button>50s</button>
            
           </div>
           
           <h2 className='activiy'>Activities details: {cart.length}</h2> 
           </div>
        </div>
    );
};

export default Activity;