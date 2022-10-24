import React, { useEffect, useState } from 'react';
import Gym from '../Gym/Gym';
import './Activity.css'
import img from '../../Images/ANITA.jpg'
import img2 from '../../Images/location.png'
import Cart from '../cart/Cart';
import BonusMark from '../cart/BonusMark/BonusMark';



const Activity = () => {
    const [gym,setGym] = useState([]);
const [cart,setCart]=useState([])    

    useEffect( ()=>{
        fetch('./gym.json')
        .then(res=> res.json())
        .then(data => setGym(data))
    },[])
    const handleAddToCart =(gymActivity)=>{
        // console.log(gymActivity)
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
           <Cart cart={cart}></Cart>
          <BonusMark></BonusMark>
        </div>
    );
};

export default Activity;