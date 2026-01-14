import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(u => ({
          id: u.id,
          name: u.name,
          email: u.email,
          type: u.id % 2 === 0 ? "admin" : "guest"
        }));
        setUsers(formatted);
      });
  }, []);

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Utilizatori și detalii</h1>
      <UserList users={users} onSelect={setSelectedUser} />
      <UserDetails user={selectedUser} />
    </div>
  );
}

export default App;
