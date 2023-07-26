import React, { useState, useEffect } from "react";
import axios from "axios";
import SetAction from "../addLogsys";
import getUser from "../getUser";

interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  avatar: string;
}

const View: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUser();
    const fetchedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(fetchedUsers);
  }, []);

  const renderUser = () => {
    SetAction("view User", "ok");
    return users.map(({ id, firstname, lastname, email, password, avatar }) => {
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{firstname}</td>
          <td>{lastname}</td>
          <td>{email}</td>
          <td>{password}</td>
          <td>
            <img src={avatar} height="50px" alt="pic" />
          </td>
        </tr>
      );
    });
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className="container-fluid">
      <div className="main">
        <button className="btn" onClick={refresh}>
          Refresh
        </button>
        <div className="table">
          <table className="table caption-top">
            <caption className="cap">View the list of users</caption>
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Avatar</th>
              </tr>
            </thead>
            <tbody>{renderUser()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default View;
