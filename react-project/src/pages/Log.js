import React, { useState, useEffect } from "react";

const Login = (props) => {
  const [log, setLog] = useState([]);

  useEffect(() => {
    const logs = JSON.parse(localStorage.getItem("logsystem"));
    setLog(logs);
  }, []);

  const renderLog = () => {
    return log.map(({ Action, Date, Success, Time }, index) => (
      <tr key={index}>
        <td>{Action}</td>
        <td>{Date}</td>
        <td>{Time}</td>
        <td>{Success}</td>
      </tr>
    ));
  };

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
            <tbody>{renderLog()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Login;
