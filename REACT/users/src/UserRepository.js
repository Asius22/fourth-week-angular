import axios from "axios";
import React from "react";

const { useState } = require("react");

const deleteUser = async (id) => {
  await axios.delete("http://localhost:8080/api/v1/" + id);
};
export const UserRepository = ({ user }) => {
  const [users, setUsers] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8080/api/v1/");
      setUsers(response.data);
    };
    fetchData();
  }, []);
  console.log(users);

  return (
    <div>
      {users.length > 0 &&
        users.map((user) => (
          <div>
            <table>
              <tr>
                <td key={user.id}>{user.id}</td>
                <td key={user.firstName}>{user.firstName}</td>
                <td key={user.lastName}>{user.lastName}</td>
                <td key={user.work}>{user.work}</td>
                <td key={user.age}>{user.age}</td>
                <td>
                  <button onClick={deleteUser(user.id)}>Elimina</button>
                </td>
              </tr>
            </table>
          </div>
        ))}
    </div>
  );
};
