import React from "react";
import { Link } from "react-router-dom";
import getUser from "../getUser";
import Login from "./Login";

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      islogin:  (JSON.parse(localStorage.getItem("islogin"))=== true),
      loginpage : !(JSON.parse(localStorage.getItem("islogin"))=== true)
    }
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    getUser();
  }
  logout(){
    localStorage.setItem('islogin',(!(this.state.islogin)))
    this.setState({
      islogin:  (JSON.parse(localStorage.getItem("islogin"))=== true),
      loginpage : !(JSON.parse(localStorage.getItem("islogin"))=== true)
    })
  }
  render() {
    return (
<div>
  {
this.state.islogin && (
  <div className="body">
  <div className="container ">
    <div className="row">
      <h1 className="header">User Managment</h1>
    </div>
    <div className="row">
      {/* <div className="col-6 d-flex justify-content-evenly">
        <Link className="disable-link" to="/login">
          <input
            className="btn-index header-btn-index"
            type="button"
            defaultValue="Login"
          />
        </Link>
      </div> */}
      {/* <div class="d-grid gap-2 d-md-block">
        <button class="btn btn-primary btn-out" type="button">
          Log out
        </button>
      </div> */}
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
            onClick={this.logout}
            id="demo"
          />
      </div>
    </div>
  </div>
</div>
)
  }
  {
this.state.loginpage && <Login></Login>
  }
</div>
    );
  }
}

export default Main;
