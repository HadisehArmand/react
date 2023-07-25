// import React from "react";
import react, { useState, useEffect } from "react";
import axios from "axios";
import SetAction from "../addLogsys";
import getUser from "../getUser";

const Edit = (props) => {
  let users = JSON.parse(localStorage.getItem("users"));
  for (let index = 0; index < users.length; index++) {
    if (parseInt(users[index]["id"]) === parseInt(props.id)) {
      users = users[index];
    }
  }
  const [id, setId] = useState(users["id"]);
  const [firstname, setfirstname] = useState(users["firstname"]);
  const [lastname, setlastname] = useState(users["lastname"]);
  const [email, setemail] = useState(users["email"]);
  const [password, setpassword] = useState(users["password"]);
  const [avatar, setavatar] = useState(users["avatar"]);
  submitUser = () => {
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
      alert("plaese complite form !");
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
              onChange={(evt) => setfirstname(evt)}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              L
            </span>
            <input
              id="lastname"
              type="text"
              className="form-control"
              placeholder="LastName"
              aria-label="LastName"
              aria-describedby="basic-addon1"
              value={lastname}
              onChange={(evt) => setlastname(evt)}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="email"
              aria-label="email"
              aria-describedby="basic-addon1"
              value={email}
              onChange={(evt) => setemail(evt)}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              P
            </span>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="password"
              aria-label="password"
              aria-describedby="basic-addon1"
              value={password}
              onChange={(evt) => setpassword(evt)}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              A
            </span>
            <input
              id="avatar"
              type="text"
              className="form-control"
              placeholder="Avatar"
              aria-label="Avatar"
              aria-describedby="basic-addon1"
              value={avatar}
              onChange={(evt) => setavatar(evt)}
            />
          </div>
        </div>
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
