import React, { useState, MouseEvent } from "react";
import axios from "axios";
import Edit from "./Edit";
import { Link } from "react-router-dom";
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

const Add: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [add, setAdd] = useState<boolean>(true);
  const [edit, setEdit] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(0);

  const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
    const idToDelete = e.currentTarget.getAttribute("data-value");
    if (idToDelete) {
      axios
        .delete(
          `https://64b53279f3dbab5a95c6e9e2.mockapi.io/api/v1/user/${idToDelete}`
        )
        .then((res) => {
          if (res.status === 200) {
            alert(JSON.stringify(res.data) + "\nwas deleted !");
            SetAction("User Delete with id", "ok");
            getUser();
            window.location.href = "/view";
          } else {
            SetAction("User Delete with id", "False");
          }
        });
    }
  };

  const editUser = (e: MouseEvent<HTMLButtonElement>) => {
    const idToEdit = e.currentTarget.getAttribute("data-value");
    if (idToEdit) {
      setEdit(true);
      setAdd(false);
      setCurrentId(Number(idToEdit));
    }
  };

  const renderUser = () => {
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
          <td>
            <div className="row">
              <button
                className="col-4 form-control btnDel btn-success"
                onClick={deleteUser}
                data-value={id}
              >
                delete
              </button>
              <button
                className="col-4 form-control btnDel btn-success"
                onClick={editUser}
                data-value={id}
              >
                edit
              </button>
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      {add && (
        <div className="container-fluid ">
          <div className="main">
            <div className="main-add">
              <div className="row d-flex justify-content-start mt-1">
                <div className="col-5">
                  <div className="input-group mb-1">
                    <Link className="disable-link" to="/sign">
                      <input
                        type="submit"
                        className="form-control btn btn-success"
                        placeholder="add user"
                        aria-label="add user"
                        value="add user"
                        aria-describedby="basic-addon1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="table">
              <table className="table caption-top">
                <caption>List of users</caption>
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Avatar</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>{renderUser()}</tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {edit && <Edit id={currentId} />}
    </div>
  );
};

export default Add;
