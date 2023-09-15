import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Admin from "./routes/Admin";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="*" element={<h1>Error: Page does not exist</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
