import React from "react";

const UserDetails = ({ user }) => {
  if (!user) return null;

  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "10px" }}>
      <h2>Detalii utilizator</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Nume:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Tip:</strong> {user.type}</p>
    </div>
  );
};

export default UserDetails;
