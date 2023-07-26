import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getUser from "../getUser";
import Login from "./Login";

const Main: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(
    JSON.parse(localStorage.getItem("islogin") || "false") === true
  );
  const [loginPage, setLoginPage] = useState<boolean>(
    !(JSON.parse(localStorage.getItem("islogin") || "false") === true)
  );

  const logout = () => {
    localStorage.setItem("islogin", (!isLogin).toString());
    setIsLogin(JSON.parse(localStorage.getItem("islogin") || "false") === true);
    setLoginPage(
      !(JSON.parse(localStorage.getItem("islogin") || "false") === true)
    );
  };

  useEffect(() => {
    // getUser();
  }, []);

  return (
    <div>
      {isLogin && (
        <div className="body">
          <div className="container ">
            <div className="row">
              <h1 className="header">User Management</h1>
            </div>
            <div className="row">
              <div className=" d-grid justify-content-center gap-2 ">
                <Link className="disable-link" to="/view">
                  <input
                    className="btn-index header-btn-index btn-primary"
                    type="button"
                    defaultValue="view"
                  />
                </Link>
              </div>
            </div>
            <div className="row">
              <div className=" d-grid justify-content-center gap-2   ">
                <Link className="disable-link" to="/add">
                  <input
                    className="btn-index header-btn-index btn-primary"
                    type="button"
                    defaultValue="Add/Edit"
                  />
                </Link>
              </div>
              <div className=" d-grid justify-content-center gap-2  ">
                <Link className="disable-link" to="/log">
                  <input
                    className="btn-index header-btn-index btn-primary"
                    type="button"
                    defaultValue="Log"
                    id="demo"
                  />
                </Link>
              </div>
              <div className=" d-grid justify-content-center gap-2  ">
                <input
                  className="btn-index header-btn-index btn-primary"
                  type="button"
                  defaultValue="Logout"
                  onClick={logout}
                  id="demo"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {loginPage && <Login />}
    </div>
  );
};

export default Main;
