import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import HomePage from "./components/HomePage";
import Predict from "./components/Predict";
import Start from "./components/Start";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="App bg-gray-900">
      <Routes>
        <Route path="/" element={isAuthenticated ? <HomePage /> : <Start />} />
        <Route path="/predict" element={<Predict />} />
      </Routes>
    </div>
  );
}

export default App;
