import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import HomePage from "./components/HomePage";
import Start from "./components/Start";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="App dark:bg-gray-900">
      {!isAuthenticated && <Start />}
      {isAuthenticated && <HomePage />}
    </div>
  );
}

export default App;
