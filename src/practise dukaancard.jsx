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
  
  //Practise UserList.jsx
  import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results || []); // safe-guard in case API changes
        setLoading(false);
      })
      .catch((err) => {
        console.error("API fetch failed:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Data aa rahi hai, thoda wait karo...</h2>;

  return (
    <div>
      <h2>User Directory</h2>
      {users.length === 0 ? (
        <p>Koi user nahi mila 😕</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={user.login?.uuid || index}>
              {user.name?.first} {user.name?.last} 
              <br />
              <small>{user.email}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;