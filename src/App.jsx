import {useState} from 'react';

function MyName(){
  const [name , setName] = useState("");
  const[locked,setLocked] =useState(false);

  return(
    <div>
      {!locked && (
      <input type="text" 
      placeholder="Enter your Name"
      value={name}
      onChange={(e)=> setName(e.target.value)}
       />)}
       <h2 style={{color:name.length>10 ? "green" : "red"}}>{name}</h2>
   

<button onClick={() => setLocked(!locked)}>
{locked ? "Unlock Name" :"Lock Name"}</button>

 </div>
  )
}export default MyName;