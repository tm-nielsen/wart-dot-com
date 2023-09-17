import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/index.css'

import Home from "./routes/Home";
import Admin from "./routes/Admin";

const serverUrl = 'http://localhost:3001'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home serverUrl={serverUrl} />} />
          <Route path="/admin" element={<Admin serverUrl={serverUrl} />} />
          <Route path="*" element={<h1>Error: Page does not exist</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
