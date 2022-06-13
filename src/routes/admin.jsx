import { useState, useEffect } from "react";
import UserProfile from "../components/UserProfile";
import "../styles/Admin.css";

const admin = ({facade}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await facade.fetchUsers();
      setUsers(usersFromServer);
    };

    getUsers();
  }, []);



  return (
  
    <table className="table-container">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
      {users.map((user) => (
  <UserProfile key={user.id} user={user} />
))}
      </tbody>
    </table>
    
   
  )
}

export default admin

