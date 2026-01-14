import React from "react";

const UserList = ({ users, onSelect }) => {
  return (
    <div style={{ border: "2px solid gray", padding: "10px", margin: "10px" }}>
      <h2>Lista utilizatorilor</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}{" "}
            <button onClick={() => onSelect(user)}>Vezi detalii</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
