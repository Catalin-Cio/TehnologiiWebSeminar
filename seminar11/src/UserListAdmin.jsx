import React from "react";

const UserListAdmin = ({ users }) => {
  const admins = users.filter(user => user.type === "admin");
  return (
    <div style={{ border: "2px solid red", padding: "10px", margin: "10px" }}>
      <h2>Administratori</h2>
      <ul>
        {admins.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserListAdmin;
