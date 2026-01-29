//App.jsx 

import ProfileCard from './ProfileCard';
import UserCard from './UserCard';

function App(){
  return(
    <div
    style={{
      height: "100vh",
      display: "grid",
      gridTemplateColumns: "repeat(5, 150px)",
      gridTemplateRows: "repeat(2, 150px)",
      gap: "40px",
      justifyContent: "center",
      alignContent: "center"
    }}
  >
      <h3> Posh Area </h3>
    
  <ProfileCard  color= "red" brand="Nike" cheez= "shoe" quantity="2"/>
  <ProfileCard color= "red" brand="Louis Vuitton" cheez="bag" quantity="6"/>
  <ProfileCard color= "red" brand="Nike" cheez= "shoe" quantity="2"/>
  <ProfileCard color= "red" brand="Louis Vuitton" cheez="bag" quantity="6"/>
  <ProfileCard color= "red" brand="Nike" cheez= "shoe" quantity="2"/>
  <ProfileCard color= "red" brand="Louis Vuitton" cheez="bag" quantity="6"/>
  <ProfileCard color= "red" brand="Nike" cheez= "shoe" quantity="2"/>
  <ProfileCard color= "red" brand="Louis Vuitton" cheez="bag" quantity="6"/>

<UserCard name="Chalak" age="20" />
    </div>
  )
}

export default App;

//PractiseCard.jsx
function ProfileCard({ brand, cheez, color, quantity }) {

    return (
  
      <div
      style={{
        backgroundColor: color,
        border: "3px solid yellow",
        width: "150px",
        height: "150px",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
        <h5>Brand:{brand}</h5>
        <h5>Cheez:{cheez}</h5>
        <h5>Quantity:{quantity}</h5>
  
      </div>
    );
  }
  export default ProfileCard;

  //UserCard.jsx

  function UserCard({name, age}){
    return(
<div style ={{border: "3px solid yellow",
      width: "150px",
      height: "150px",
      display: "flex",
      flexDirection:"column",
      justifyContent: "center",
      fontSize:"5px",
      alignItems: "center"}}>

<h1>Name:{name}</h1>
    <h1>Age:{age}</h1>
</div>
    )
}

export default UserCard;