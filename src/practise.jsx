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
 export default Welcome;*//*
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