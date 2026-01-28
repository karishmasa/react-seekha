import {useState} from 'react';

function LightSwitch(){
  const [isOn, setIsOn] =useState(true);

const handleToggle = () => {
  setIsOn(!isOn);
};
return(
  <div style={{textAlign:'center', marginTop:'50px'}}>

    <h1>The light is {isOn ? "ON ":"Off"}</h1>
  <button onClick={handleToggle}>
Switch{isOn ? "Off":"ON"}
  </button>
  </div>
)

}
export default LightSwitch;
