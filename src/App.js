import React from "react";
import { Routes, Route } from "react-router-dom";
import Table from "./pages/Table";
import NotFound from "./pages/NotFound";
import Unauthorized from "./pages/Unauthorised";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./pages/Login";
const App = () => {
  return (
    <div className="App">
   
      <Routes>
        <Route path="unauthorized" element={<Unauthorized />} />

        <Route exact path="/" element={<Login />} />

        <Route path="/Table" element={<Table />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
