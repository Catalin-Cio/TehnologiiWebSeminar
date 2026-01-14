import React from "react";

const UserListGuest = ({ users }) => {
  const guests = users.filter(user => user.type === "guest");
  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
      <h2>Utilizatori Guest</h2>
      <ul>
        {guests.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserListGuest;
