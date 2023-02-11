import React from "react";
import bg from "../images/bg.jpg";
import "./neon.css";

function Hero() {
  return (
    <>
      <div className="flex flex-col mt-[100px] items-center">
        <h1 className="text-center neonText text-[50px] tracking-wider text-white font-bold">
          Welcome to Pre-Plant
        </h1>
        <p className="text-center text-[20px] tracking-wider text-white font-bold">
          Revolutionize the way you farm with our AI crop prediction website.
        </p>
        <p className="text-center text-[20px] mt-[10px] tracking-wider text-white font-bold">
          Utilizing cutting-edge technology, we accurately predict crop
          yields,optimize planting
        </p>
        <p className="text-center text-[20px] mt-[10px] tracking-wider text-white font-bold">
          and harvesting times,and improve overall crop productivity for farmers
          worldwide.
        </p>
        <div className="mt-[20px]">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[15px] px-5 py-2.5 text-center mr-3 md:mr-[50px] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Learn More
          </button>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[15px] px-5 py-2.5 text-center mr-3 md:mr-[50px] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Predict
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
