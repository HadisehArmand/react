import React, { useState, useEffect } from "react";
import Main from "./Main";
import add_admin from "../refresh";
import getUser from "../getUser";
add_admin();
getUser();
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [main, setMain] = useState(
    JSON.parse(localStorage.getItem("islogin")) === true
  );
  const admin_username = localStorage.getItem("admin-username");
  const admin_password = localStorage.getItem("admin-password");
  const [isLogin, setIsLogin] = useState(
    !(JSON.parse(localStorage.getItem("islogin")) === true)
  );
  console.log(main);
  console.log(isLogin);

  // const retrievedObjectLG = JSON.parse(localStorage.getItem("users"));

  useEffect(() => {
    // setIsLogin(JSON.parse(localStorage.getItem("islogin")) === true);
    // setMain(JSON.parse(localStorage.getItem("islogin")) === true);
  }, []);

  const checkuser = () => {
    if (email !== "" && password !== "") {
      console.log("toshe");
      console.log(typeof admin_username);
      console.log(typeof email);
      if (email === admin_username && password === admin_password) {
        alert("login success !");
        getUser();
        setIsLogin(false);
        setMain(true);
        localStorage.setItem("islogin", true);
      }
    } else {
      alert("complete field");
    }
  };

  return (
    <div>
      {isLogin && (
        <div className="container-fluid d-flex justify-content-center mt-5">
          <div className="row main-login">
            <div className="row d-flex justify-content-center">
              <h1 className="text-center">Login</h1>
              <div className="input-group mb-3  d-flex justify-content-center">
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
                  onChange={(evt) => setEmail(evt.target.value)}
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
                  onChange={(evt) => setPassword(evt.target.value)}
                />
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-6  d-flex justify-content-evenly">
                <input
                  className="btn-bt"
                  type="button"
                  value="Login"
                  onClick={() => checkuser()}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {main && <Main />}
    </div>
  );
};

export default Login;
