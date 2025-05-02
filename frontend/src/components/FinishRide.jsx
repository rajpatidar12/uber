import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 cursor-pointer"
        onClick={() => {
          props.setfinishRidePanel(false);
        }}
      >
        <i className="text-3xl text-gray-900 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Finish this ride</h3>
      <div className="flex items-center justify-between p-4  border-2 border-yellow-400 rounded-lg">
        <div className="flex items-center gap-3 ">
          <img
            className="h-10 rounded-full object cover w-10 mt-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMy-qQMk9TLV_JU1csbSH5G5Q996Mo2_KQ1w&s"
            alt=""
          />
          <h2 className="text-lg font-medium">Sejal Gupta</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex gap-4 justify-between flex-col">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">12/11-A Patidar Bhavan</h3>
              <p className="text-sm -mt-1 text-gray-600">Mugaliya Hat,Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">12/11-A Patidar Bhavan</h3>
              <p className="text-sm -mt-1 text-gray-600">Mugaliya Hat,Bhopal</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 ">
            <i className="text-lg ri-currency-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹193</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Link
            to="/captain-riding"
            className="w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
          >
            Finish Ride
          </Link>
          <p className="mt-6 text-xs">
            Click on finish ride button if you have completed the payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
