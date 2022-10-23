import React from 'react';
import '../Activity/Activity.css'
import img from '../../Images/ANITA.jpg'
import img2 from '../../Images/location.png'

const Cart = ({cart}) => {
    return (
        <div>
            <div className="activity-details">
           <div className='profile'>
        <div className='profile2'>
            <img src={img} alt="" />
            <h1> Anita Ferdous</h1>
            </div>
           <div className='profile3'>
           <img src={img2} alt="" />
            <p>dhaka,Bangladesh</p>
           </div>
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

<p className='times'> TIME:</p>

<p className='times'> Breaktime:</p> 
<button className='activity-toast'>Activity finish</button>
           
           </div>
        </div>
    );
};

export default Cart;