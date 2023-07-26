import React, { useState, useEffect, ChangeEvent } from "react";
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

interface EditProps {
  id: number;
}

const Edit: React.FC<EditProps> = (props) => {
  const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
  let currentUser: User | undefined;

  for (let index = 0; index < users.length; index++) {
    if (
      parseInt(users[index].id.toString()) === parseInt(props.id.toString())
    ) {
      currentUser = users[index];
      break;
    }
  }

  const [id, setId] = useState<number>(currentUser ? currentUser.id : 0);
  const [firstname, setFirstname] = useState<string>(
    currentUser ? currentUser.firstname : ""
  );
  const [lastname, setLastname] = useState<string>(
    currentUser ? currentUser.lastname : ""
  );
  const [email, setEmail] = useState<string>(
    currentUser ? currentUser.email : ""
  );
  const [password, setPassword] = useState<string>(
    currentUser ? currentUser.password : ""
  );
  const [avatar, setAvatar] = useState<string>(
    currentUser ? currentUser.avatar : ""
  );

  const submitUser = () => {
    if (
      firstname !== "" &&
      lastname !== "" &&
      email !== "" &&
      password !== "" &&
      avatar !== ""
    ) {
      let bodyUser: User = {
        id,
        firstname,
        lastname,
        email,
        avatar,
        password,
      };

      axios
        .put(
          `https://64b53279f3dbab5a95c6e9e2.mockapi.io/api/v1/user/${props.id}`,
          bodyUser
        )
        .then((res) => {
          alert(JSON.stringify(res.data) + "\nEdited !");
          SetAction(`"Edit login with id ${props.id}"`, "ok");
          getUser();
          window.location.href = "/view";
        })
        .catch((error) => {
          SetAction(`"Edit login with id ${props.id}"`, "False");
          console.error("Error editing user: ", error);
        });
    } else {
      alert("please complete the form !");
      SetAction(`"Edit login with id ${props.id}"`, "False");
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center mt-5">
      <div className="row main-sign-log">
        <div className="row d-flex justify-content-center">
          <h1 className="text-center">Edit</h1>
          <div className="input-group mb-3  d-flex justify-content-center">
            <span className="input-group-text" id="basic-addon1">
              F
            </span>
            <input
              id="firstname"
              type="text"
              className="form-control"
              placeholder="FirstName"
              aria-label="FirstName"
              aria-describedby="basic-addon1"
              value={firstname}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                setFirstname(evt.target.value)
              }
            />
          </div>
        </div>
        {/* ... and the rest of the inputs ... */}
        <div className="row d-flex justify-content-center">
          <div className="col-6 d-flex justify-content-evenly">
            <input
              className="btn"
              type="button"
              value="Edit"
              onClick={submitUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
