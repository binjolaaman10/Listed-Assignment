import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Screens/Dashboard";
import Login from "./Screens/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const [loginDetails, setLoginDetails] = useState(null);

  const isAuthenticated = () => {
    return !!loginDetails; // Check if loginDetails state is truthy
  };

  return (
    <GoogleOAuthProvider clientId="432728547325-mvjahu11dfunjsjkirj47daun1upr530.apps.googleusercontent.com">
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/home"
              element={
                isAuthenticated() ? (
                  <Dashboard loginDetails={loginDetails} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/"
              element={
                !isAuthenticated() ? (
                  <Login
                    loginDetails={loginDetails}
                    setLoginDetails={setLoginDetails}
                  />
                ) : (
                  <Navigate to="/home" />
                )
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
