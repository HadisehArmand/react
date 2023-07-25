import React from "react";
import SetAction from "../addLogsys";
import getUser from "../getUser";
class View extends React.Component {
    constructor(props) {
        super(props)
        getUser()
        let users = JSON.parse(localStorage.getItem('users'))
        this.state = {
            person: users
        }
    }
    renderUser() {
        const users = this.state
        SetAction("view User",'ok')
        return users['person'].map(({ id, firstname, lastname, email, password, avatar }) => {
            return <tr key={id} >
                <td>{id}</td>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td>
                    <img src={avatar} height="50px" alt="pic"></img>
                </td>
            </tr>
        })
    }
    refresh(){
        window.location.reload()
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="main">
                    <button className="btn" onClick={this.refresh}>Refresh</button>
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
                            <tbody>
                                {this.renderUser()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default View;