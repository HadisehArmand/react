import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props)
        let logs = JSON.parse(localStorage.getItem('logsystem'))
        this.state = {
            log: logs
        }

    }
    renderLog() {
        const logs = this.state
        
        return logs['log'].map(({ Action, Date, Success, Time }) => {
            return <tr>
                <td>{Action}</td>
                <td>{Date}</td>
                <td>{Time}</td>
                <td>{Success}</td>
            </tr>
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="main">
                    <div className="table">
                        <table className="table caption-top">
                            <caption>List of Actions</caption>
                            <thead>
                                <tr>
                                    <th scope="col">Action</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Success</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderLog()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;