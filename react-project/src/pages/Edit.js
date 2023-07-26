import React, { useState, useEffect } from "react";
import axios from "axios";
import SetAction from "../addLogsys";
import getUser from "../getUser";

const Edit = (props) => {
  const users = JSON.parse(localStorage.getItem("users"));
  let currentUser;
  for (let index = 0; index < users.length; index++) {
    if (parseInt(users[index]["id"]) === parseInt(props.id)) {
      currentUser = users[index];
      break;
    }
  }

  const [id, setId] = useState(currentUser["id"]);
  const [firstname, setFirstname] = useState(currentUser["firstname"]);
  const [lastname, setLastname] = useState(currentUser["lastname"]);
  const [email, setEmail] = useState(currentUser["email"]);
  const [password, setPassword] = useState(currentUser["password"]);
  const [avatar, setAvatar] = useState(currentUser["avatar"]);

  const submitUser = () => {
    if (
      firstname !== "" &&
      lastname !== "" &&
      email !== "" &&
      password !== "" &&
      avatar !== ""
    ) {
      let bodyUser = {
        id,
        firstname,
        lastname,
        email,
        avatar,
        password,
      };
      bodyUser = JSON.stringify(bodyUser);
      let baseUrl =
        "https://64b53279f3dbab5a95c6e9e2.mockapi.io/api/v1/user/" + props.id;
      axios
        .put(`${baseUrl}`, bodyUser, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then((res) => {
          alert(JSON.stringify(res.data) + "\nEdited !");
          SetAction(`"Edit login with id ${props.id}"`, "ok");
          getUser();
          window.location.href = "/view";
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
              onChange={(evt) => setFirstname(evt.target.value)}
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
