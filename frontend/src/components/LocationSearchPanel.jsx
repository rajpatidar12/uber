import React from "react";

const LocationSearchPanel = (props) => {
  // sample array for locations\

  const locations = [
    "Patidar's Cafe Mugaliya Hat,Bhopal",
    "City Hospital, MP Nagar",
    "DB Mall, Bhopal",
    "LNCT University, Bhopal",
    "Patidar's Restaurant, New Market",
    "Goyal's Grocery Store, 10 No. Market",
  ];

  return (
    <div>
      {locations.map(function (elem) {
        return (
          <div
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex item-center gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl  my-2 justify-start"
          >
            <h2 className="bg-[#eee] flex items-center justify-center h-8 w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
