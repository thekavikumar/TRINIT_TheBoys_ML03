import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import logo from "../images/preplant.png";

function Start() {
  const { loginWithPopup } = useAuth0();
  return (
    <div className="h-screen bg-gray-200">
      <div className="flex flex-col justify-center items-center h-full">
        <img src={logo} className=" h-[150px]" alt="logo" />
        <div className="btns">
          <button
            onClick={() => loginWithPopup()}
            className=" mr-[10px] p-[10px] bg-[#0015ff] text-white text-[16px] rounded-[5px] hover:bg-[#655dff]"
          >
            Login
          </button>
          <button
            onClick={() => loginWithPopup()}
            className=" p-[10px] bg-[#e4fdda] text-[16px] text-[#00bbff] rounded-[5px] hover:bg-[#00b0c4] hover:text-[#000000]"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Start;
