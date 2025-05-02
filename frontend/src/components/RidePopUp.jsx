import React from "react";

const RidePopUP = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 cursor-pointer"
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i className="text-3xl text-gray-900 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">A Ride for You!</h3>
      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
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
        <div className="flex mt-5 w-full items-center justify-between">
          <button
            onClick={() => {
              props.setRidePopupPanel(false);
            }}
            className=" mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg"
          >
            Ignore
          </button>

          <button
            onClick={() => {
              props.setConfirmRidePopupPanel(true);
            }}
            className=" bg-green-600 text-white font-semibold p-3 px-10 rounded-lg"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUP;
