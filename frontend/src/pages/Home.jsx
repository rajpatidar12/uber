import React, { useState } from "react";
import axios from "axios";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [panelOpen, setPanelOpen] = useState(false);

  const handlePickupChange = async (e) => {
    const value = e.target.value;
    setPickup(value);
    if (value.length < 3) {
      setPickupSuggestions([]);
      return;
    }
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/place/autocomplete`,
        {
          params: { input: value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPickupSuggestions(response.data);
    } catch (err) {
      console.error("Pickup suggestion error:", err);
    }
  };

  const handleDestinationChange = async (e) => {
    const value = e.target.value;
    setDestination(value);
    if (value.length < 3) {
      setDestinationSuggestions([]);
      return;
    }
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/place/autocomplete`,
        {
          params: { input: value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDestinationSuggestions(response.data);
    } catch (err) {
      console.error("Destination suggestion error:", err);
    }
  };

  return (
    <div className="h-screen relative overflow-visible">
      {/* Background and logo images */}
      <img
        className="w-16 absolute left-5 top-5 z-20"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />
      <div className="h-screen w-screen absolute top-0 left-0 z-10">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full z-30">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            onClick={() => setPanelOpen(false)}
            className={`absolute right-6 top-6 text-2xl transition-opacity duration-300 ${
              panelOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form className="relative py-3" onSubmit={(e) => e.preventDefault()}>
            <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
                setActiveField("pickup");
              }}
              value={pickup}
              onChange={handlePickupChange}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
                setActiveField("destination");
              }}
              value={destination}
              onChange={handleDestinationChange}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        {/* Suggestions Panel */}
        {panelOpen && (
          <div className="bg-white h-fit p-4">
            <LocationSearchPanel
              suggestions={
                activeField === "pickup"
                  ? pickupSuggestions
                  : destinationSuggestions
              }
              activeField={activeField}
              setPanelOpen={setPanelOpen}
              setPickup={setPickup}
              setDestination={setDestination}
              onSuggestionSelect={(suggestion) => {
                if (activeField === "pickup") {
                  setPickup(suggestion.description);
                  setPickupSuggestions([]);
                } else if (activeField === "destination") {
                  setDestination(suggestion.description);
                  setDestinationSuggestions([]);
                }
                setPanelOpen(false);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
