import React from "react";
import axios from "axios";
import SetAction from "../addLogsys";
import getUser from "../getUser";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.reset();
        this.submitUser = this.submitUser.bind(this)
    }

    reset() {
        this.setState({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            avatar: '',
        })
    }
    submitUser() {
        if (this.state.firstname !== '' && this.state.lastname !== '' && this.state.email !== '' && this.state.password !== '' && this.state.avatar !== '') {
            let bodyUser = JSON.stringify(this.state);
            axios.post(`https://64b53279f3dbab5a95c6e9e2.mockapi.io/api/v1/user/`,bodyUser, {
                headers: {
                    'content-type': 'application/json',
                },
            })
            .then(res => {
                alert(JSON.stringify(res.data) + "\nCreated !")
                SetAction(`"Signin with id ${res.data.id}"`,"ok")
                getUser()
                window.location.href = "/view"
            })
        }else{
            alert("plaese complite form !")
            SetAction("Signin","False")
        }
    }
    updateInputValue(evt) {
        const val = evt.target.value;
        const idV = evt.target.id;    
        this.setState({
            [idV]: val
        });
    }
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center mt-5">
                <div className="row main-sign-log">
                    <div className="row d-flex justify-content-center">
                        <h1 className="text-center">Sign Up</h1>
                        <div className="input-group mb-3  d-flex justify-content-center">
                            <span className="input-group-text" id="basic-addon1">F</span>
                            <input
                                id="firstname"
                                type="text"
                                className="form-control"
                                placeholder="FirstName"
                                aria-label="FirstName"
                                aria-describedby="basic-addon1"
                                onChange={evt => this.updateInputValue(evt)}
                            />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">L</span>
                            <input
                                id="lastname"
                                type="text"
                                className="form-control"
                                placeholder="LastName"
                                aria-label="LastName"
                                aria-describedby="basic-addon1"
                                onChange={evt => this.updateInputValue(evt)}
                            />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input
                                id="email"
                                type="email"
                                className="form-control"
                                placeholder="email"
                                aria-label="email"
                                aria-describedby="basic-addon1"
                                onChange={evt => this.updateInputValue(evt)}
                            />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">P</span>
                            <input
                                id="password"
                                type="password"
                                className="form-control"
                                placeholder="password"
                                aria-label="password"
                                aria-describedby="basic-addon1"
                                onChange={evt => this.updateInputValue(evt)}
                            />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">A</span>
                            <input
                                id="avatar"
                                type="text"
                                className="form-control"
                                placeholder="Avatar"
                                aria-label="Avatar"
                                aria-describedby="basic-addon1"
                                onChange={evt => this.updateInputValue(evt)}
                            />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-6  d-flex justify-content-evenly">
                            <input className="btn" type="button" value="SignUp" onClick={this.submitUser} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;