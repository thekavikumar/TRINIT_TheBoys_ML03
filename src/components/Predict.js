import React from "react";
import Navbar from "./Navbar";
import banner from "../images/bn.png";
import "./Predict.css";
import axios from "axios";

function Predict() {
  const url = "http://127.0.0.1:8000/predict_crop";
  const [temp, setTemp] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [humidity, setHumidity] = React.useState("");
  const [rain, setRain] = React.useState("");
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [state, setState] = React.useState("");
  const [ph, setPh] = React.useState("");
  const [N, setN] = React.useState("");
  const [P, setP] = React.useState("");
  const [K, setK] = React.useState("");
  const [price, setPrice] = React.useState("");

  const data = {
    temperture: temp,
    humidity: humidity,
    rainfall: rain,
    ph: ph,
    N: N,
    P: P,
    K: K,
    price: price,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        temperture: data.temperture,
        humidity: data.humidity,
        rainfall: data.rainfall,
        ph: data.ph,
        N: data.N,
        P: data.P,
        K: data.K,
        price: data.price,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="h-screen">
      <Navbar />
      <div className="container flex items-center justify-between">
        <div className="image ml-[50px] mt-[-20px]">
          <img className=" h-[650px]" src={banner} />
        </div>
        {/* <div className="form border-2 border-gray-300 w-[750px] mr-[50px] p-[20px]"></div> */}
        <div className="bg-[#bae8e8] w-[750px] mr-[50px] rounded shadow-lg p-[20px] px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-5">
                  <label for="temp">Temperature</label>
                  <input
                    type="number"
                    name="temp"
                    id="temp"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={temp}
                    onChange={(e) => setTemp(e.target.value)}
                    placeholder="Enter the temperture in degree celsius"
                  />
                </div>

                <div className="md:col-span-5">
                  <label for="humidity">Humidity</label>
                  <input
                    type="number"
                    name="humidity"
                    id="humidity"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={humidity}
                    onChange={(e) => setHumidity(e.target.value)}
                    placeholder="Enter the humidity in percentage"
                  />
                </div>

                <div className="md:col-span-3">
                  <label for="rain">Rainfall</label>
                  <input
                    type="number"
                    name="rain"
                    id="rain"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={rain}
                    onChange={(e) => setRain(e.target.value)}
                    placeholder=" Enter the rainfall in mm"
                  />
                </div>

                <div className="md:col-span-2">
                  <label for="city">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder=" Enter the city name"
                  />
                </div>

                <div className="md:col-span-2">
                  <label for="country">Country / region</label>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      name="country"
                      id="country"
                      placeholder=" Enter the country name"
                      className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                    <button
                      tabindex="-1"
                      className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                    >
                      <svg
                        className="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    <button
                      tabindex="-1"
                      for="show_more"
                      className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                    >
                      <svg
                        className="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label for="state">State / province</label>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      name="state"
                      id="state"
                      placeholder="State"
                      className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                    <button
                      tabindex="-1"
                      className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                    >
                      <svg
                        className="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    <button
                      tabindex="-1"
                      for="show_more"
                      className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                    >
                      <svg
                        className="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="md:col-span-1">
                  <label for="zipcode">Price</label>
                  <input
                    type="number"
                    name="zipcode"
                    id="zipcode"
                    className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder=" Enter the price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="md:col-span-1">
                  <label for="soda">PH Value</label>
                  <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <button
                      tabindex="-1"
                      for="show_more"
                      className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mx-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <input
                      name="ph"
                      id="ph"
                      placeholder="0"
                      className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                      value={ph}
                      onChange={(e) => setPh(e.target.value)}
                    />
                    <button
                      tabindex="-1"
                      for="show_more"
                      className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mx-2 fill-current"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="md:col-span-1 ml-[10px]">
                  <label for="soda">N Value</label>
                  <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <button
                      tabindex="-1"
                      for="show_more"
                      className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mx-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <input
                      name="n"
                      id="n"
                      placeholder="0"
                      className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                      value={N}
                      onChange={(e) => setN(e.target.value)}
                    />
                    <button
                      tabindex="-1"
                      for="show_more"
                      className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mx-2 fill-current"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="md:col-span-1 ml-[20px]">
                  <label for="soda">K Value</label>
                  <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <button
                      tabindex="-1"
                      for="show_more"
                      className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mx-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <input
                      name="k"
                      id="k"
                      placeholder="0"
                      className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                      value={K}
                      onChange={(e) => setK(e.target.value)}
                    />
                    <button
                      tabindex="-1"
                      for="show_more"
                      className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mx-2 fill-current"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="md:col-span-1 ml-[30px]">
                  <label for="soda">P Value</label>
                  <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <button
                      tabindex="-1"
                      for="show_more"
                      className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mx-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <input
                      name="P"
                      id="P"
                      placeholder="0"
                      className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                      value={P}
                      onChange={(e) => setP(e.target.value)}
                    />
                    <button
                      tabindex="-1"
                      for="show_more"
                      className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mx-2 fill-current"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="billing_same"
                      id="billing_same"
                      className="form-checkbox"
                    />
                    <label for="billing_same" className="ml-2">
                      I agree to the terms and conditions
                    </label>
                  </div>
                </div>

                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-end">
                    <button
                      onClick={handleSubmit}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="bg-gray-900 mt-[50px] text-center text-white text-[20px]">
        Top Crops Suggestions
      </h1>
      <div className="bg-gray-900 flex items-center justify-center">
        <table class=" rounded styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-[#0b02bf]">Dom</td>
              <td>6000</td>
            </tr>
            <tr>
              <td>Dom</td>
              <td>6000</td>
            </tr>
            <tr>
              <td>Dom</td>
              <td>6000</td>
            </tr>
            <tr class="active-row">
              <td>Melissa</td>
              <td>5150</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Predict;
