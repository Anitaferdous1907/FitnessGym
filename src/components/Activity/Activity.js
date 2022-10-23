import React, { useEffect, useState } from 'react';
import Gym from '../Gym/Gym';
import './Activity.css'
import img from '../../Images/ANITA.jpg'
import img2 from '../../Images/location.png'
import Cart from '../cart/Cart';



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
           <Cart cart={cart}></Cart>
           <div> <h1>How does React Work?</h1>
           <p>
           React is a very simple and straightforward JavaScript library. Working with it is very easy for anyone who has basic JavaScript knowledge. And one of the biggest benefits of using React library is that it enables the app developers to import HTML code with JavaScript code while creating a React application.

With React, the web developers can create a representation of a DOM node and this can be done by declaring the Element function in React. 

the React developers can now use className. In addition to this, JSX tags in React have a name, attribute, and children. Therefore, all the expressions and numeric values must be written in curly brackets. The JSX attributes’ quotation marks represent strings just like JavaScript. Besides, using JSX instead of JavaScript also helps in simplifying the components and also keeps the web app’s code clean.

Any React app comes with a single root DOM node and this means that when it comes to rendering an Element into the DOM, there will be a change observed in the user interface of the page.
           </p>

           <h1>Difference between props and state react</h1>
           <p>State
The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.

Props
Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>

<h1>UseEffect use cases</h1>
<p>1.Running once on mount: fetch API data
2.Running on state change: validating input field
3.Running on state change: live filtering
4.Running on state change: trigger animation on new array value
5.Running on props change: update paragraph list on fetched API data update
6.Running on props change: updating fetched API data to get BTC updated price</p>
           </div>
        </div>
    );
};

export default Activity;