import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Login";
import View from "./pages/View";
import Login from "./pages/Main";
import Add from "./pages/Add";
import Sigin from "./pages/Sigin";
import Log from "./pages/Log";
import Edit from "./pages/Edit";
import React from 'react';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Main />} />
          </Route>
          <Route path="/view" element={<View />}>
            <Route index element={<View />} />
          </Route>
          <Route path="/login" element={<Login />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/add" element={<Add />}>
            <Route index element={<Add />} />
          </Route>
          <Route path="/log" element={<Log />}>
            <Route index element={<Log />} />
          </Route>
          <Route path="/sign" element={<Sigin />}>
            <Route index element={<Sigin />} />
          </Route>
          <Route path="/edit" element={(props) => <Edit {...props}/>}>
            <Route index element={(props) => <Edit {...props}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
