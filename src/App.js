import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/index.css'

import AuthContextProvider from "./contexts/AuthContext";

import Home from "./routes/Home";
import Login from "./routes/Login";
import AdminRoot from "./routes/AdminRoot";

import AdminNavPage from "./routes/admin/AdminNavPage";
import ApprovalPage from "./routes/admin/ApprovalPage";
import ConfirmSelectPage from "./routes/admin/ConfirmSelectPage";
import EditPage from "./routes/admin/EditPage";
import EndorsementsPage from "./routes/admin/EndorsementsPage";


const App = () => {
  return (
    <>
      <div className="background" />
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="admin" element={<AdminRoot />}>
              <Route index element={<AdminNavPage />} />
              <Route path="approve" element={<ApprovalPage />} />
              <Route path="confirm" element={<ConfirmSelectPage />} />
              <Route path="edit" element={<EditPage />} />
              <Route path='endorsements' element={<EndorsementsPage />} />
            </Route>
            <Route path="*" element={<h1>Error: Page does not exist</h1>} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
