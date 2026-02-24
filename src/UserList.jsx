import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]); // Data store karne ke liye
  const [loading, setLoading] = useState(true); // Loading dikhane ke liye
const [searchTerm,setSearchTerm] = useState('');

  useEffect(() => {
    // 1. Internet se data mangwao
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // 2. Usko readable banao
      .then(data => {
        setUsers(data); // 3. State mein save karo
        setLoading(false); // 4. Loading band karo
      });
  }, []); // [] matlab sirf page load hone par ek baar

  //filter logic
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <h2>Data aa raha hai, wait karo... 🔄</h2>;

  return (
    <div>
      <h2>User Directory</h2>

   {/*Search Box */}
   <input type="text"
   placeholder='Search my name...'
   value={searchTerm}
   onChange={(e) => setSearchTerm(e.target.value)}
    />


      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name} - 📧 {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;