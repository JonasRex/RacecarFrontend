import React from "react";

const UserProfile = ({ user: {id,firstName, lastName, email} }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
    </tr>
  );
};

export default UserProfile;
