import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

function HomePage() {
  const { logout } = useAuth0();
  return (
    <div className=" h-screen">
      {/* <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button> */}
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default HomePage;
