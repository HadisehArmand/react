import React from "react";
import Main from "./Main";
import add_admin from "../refresh";
import getUser from "../getUser";
class Login extends React.Component {
  constructor(props) {
    super(props);
    add_admin();
    getUser();
    this.state = {
      email: "",
      password: "",
      main:((JSON.parse(localStorage.getItem("islogin"))=== true)),
      admin_username: localStorage.getItem("admin-username"),
      admin_password: localStorage.getItem("admin-password"),
      islogin: !(JSON.parse(localStorage.getItem("islogin"))=== true),
    };
    this.retrievedObjectLG = JSON.parse(localStorage.getItem("users"));
    this.checkuser = this.checkuser.bind(this);

  }
  checkuser() {
    if (this.state.email !== "" && this.state.password !== "") {
      if (
        this.state.email === this.state.admin_username &&
        this.state.password === this.state.admin_password
      ) {
        alert("login success !")
        getUser();
        this.setState({ islogin: false , main:true});
        localStorage.setItem("islogin", true);
      }
    } else {
      alert("complete field");
    }
  }
  updateInputValue(evt) {
    const val = evt.target.value;
    const idV = evt.target.id;
    this.setState({
      [idV]: val,
    });
  }
  //   checkuser() {
  //     for (let index = 0; index < this.retrievedObjectLG.length; index++) {
  //       if (
  //         this.retrievedObjectLG[index]["email"] === this.state.email &&
  //         this.retrievedObjectLG[index]["password"] === this.state.password
  //       ) {
  //         alert("User Login Success !");
  //         SetAction("login with id " + this.state.id, "ok");
  //         window.location.href = "/view";
  //         break;
  //       } else {
  //         alert("User Login not success !");
  //         SetAction("login with id " + this.state.id, "False");
  //         break;
  //       }
  //     }
  //   }
  render() {
    return (
      <div>
      {
        (this.state.islogin) &&    
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
                onChange={(evt) => this.updateInputValue(evt)}
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
                onChange={(evt) => this.updateInputValue(evt)}
              />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-6  d-flex justify-content-evenly">
              <input
                className="btn-bt"
                type="button"
                value="Login"
                onClick={this.checkuser}
              />
            </div>
          </div>
        </div>
      </div>
      }
      {
           (this.state.main) && <Main/>
      }
      </div>

    );
  }
}

export default Login;
