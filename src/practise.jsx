import  {useState} from 'react';
function LightSwitch(){
  const [isOn, setIsOn]= useState(0);
  const [ count,setCount] =useState(0);

const handleToggle = () => {
   setIsOn(!isOn);
   setCount(count+1);
};
return (
  <div>
    <button onClick = {handleToggle}>
Toggle{isOn? "On": "Off"}
    </button>
<h1 style={{color:isOn?"green" : "red"}}>

  Turn{isOn?"On": "Off"}
</h1>

<p>toggled {count} times</p>
  </div>
)

}

export default LightSwitch;





























//please practise it agian amny times


/*
import {useState,useEffect} from 'react';

//value + changer = useState

function Timer(){
  const [seconds,setSeconds] = useState(0);


useEffect(()=>{
  const interval = setInterval(()=>{
    setSeconds(prev => prev+1900000000000);
  },200);
  return () => clearInterval(interval);
},[]);


  return <h1> Balak tumne is page par {seconds} seconds bitaye hai</h1>
}

export default Timer;
*/


import { useState } from "react";

function MyInput(){
  const [text,setText] = useState("");

  return(
    <div>
      <input type="text"
      placeholder="Karishma..." 
      value={text}
      onChange={(e) => setText(e.target.value)} />
      
      <p>Tumne likha:{text}</p>
     </div>
  )
}

export default MyInput;



// 1 ka part - ProfileCard.jsx
function ProfileCard({ name, kaam }) {
  return (
    <div style={{ border: "1px solid cyan", padding: "10px", margin: "10px" }}>
      <h2>Naam: {name}</h2>
      <p>Kaam: {kaam}</p>
    </div>
  );
}

export default ProfileCard;

//2 - App.jsx
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <h1>My Team</h1>

      <ProfileCard name="Rahul" kaam="Software Engineer" />
      <ProfileCard name="Sneha" kaam="Designer" />
    </div>
  );
}

export default App;


/*    
import { useState } from 'react';

function LightSwitch() {
  // 1. Shuruat mein light ON hai (true)
  const [isOn, setIsOn] = useState(true);

  // 2. Ek function banate hain jo switch ko palat dega
  const handleToggle = () => {
    setIsOn(!isOn); // '!' ka matlab hai 'ulta' (true ka false, false ka true)
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>The light is {isOn ? "ON 💡" : "OFF ⚫"}</h1>
      
      <button onClick={handleToggle}>
        Switch {isOn ? "OFF" : "ON"}
      </button>
    </div>
  );
}

export default LightSwitch;



/*import { useState } from 'react'; // 1. Pehle import karo

function Counter() {
  // 2. State declare karo: [value, function_to_change_value]
  const [count, setCount] = useState(0); 

  return (
    <div>
      <p>Tumne button {count} baar dabaya</p>
      
      {/* 3. Function use karke state badlo 
      <button onClick={() => setCount(count + 1)}>
        Click Me!
      </button>
    </div>
  );
}*/
/*function Welcome() {
  const name = "Chhote Bacche";

  return (
    <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
      <h1>Hello, {name}!</h1>
      <p>Aaj se tum React Developer ban rahe ho. 🚀</p>
      <button onClick={() => alert("Mubarak ho!")}>Click Me</button>
    </div>
  );
}
 export default Welcome;*/
 
 /*
 const FruitList = () => {
  const items = ["Apple", "Orange", "Grapes"];

  return (
    <ul>
      {items.map((fruit, index) => (
        <li key={index}> {fruit} 🍎 </li>
      ))}
    </ul>
  );
};
export default FruitList;*/

import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Yeh code component load hote hi shuru ho jayega
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup: Jab component hatayein, toh timer band kar do
    return () => clearInterval(interval);
  }, []); // [] matlab sirf ek baar shuru karo

  return <h1>Baalak, tumne is page par {seconds} seconds bitaye hain!</h1>;
}


