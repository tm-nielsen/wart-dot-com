import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/index.css'

import AuthContextProvider from "./contexts/AuthContext";

import Home from "./routes/Home";
import Login from "./components/admin/Login";
import Admin from "./routes/Admin";


const App = () => {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<h1>Error: Page does not exist</h1>} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
