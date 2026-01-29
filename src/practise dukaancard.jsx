//App.jsx

import ProfileCard from './ProfileCard';

function App(){
  return(
    <div>
      <h1>Mera Colony</h1>

    <ProfileCard dukn= "Bakery" gndr="female"/>
    <ProfileCard dukn="Aircraft" gndr="majnu"/>
    </div>
  )
}
export default App;

//ProfileCard.jsx

function ProfileCard({dukn, gndr}){
  
    function showAlert() {
      alert("Hello from " + dukn);
    }
    return(
      <div style = {{border:"1px solid cyan", padding:"10px" ,margin:"10px" }}>
        <h1>Dukaan:{dukn}</h1>
        <h2>Gnder:{gndr}</h2>
     
      
      <button onClick={showAlert}>Click Me</button>
     </div>)
  }
  export default ProfileCard;
  
  