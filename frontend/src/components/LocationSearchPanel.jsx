import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {
  // New helper to handle suggestion selection
  const handleSelect = (elem) => {
    if (props.onSuggestionSelect) {
      props.onSuggestionSelect(elem);
    } else {
      if (props.activeField === "pickup") {
        props.setPickup(elem.description);
      } else if (props.activeField === "destination") {
        props.setDestination(elem.description);
      }
      props.setPanelOpen(false);
    }
  };

  return (
    <div>
      {props.suggestions && props.suggestions.length > 0 ? (
        props.suggestions.map((elem, idx) => (
          <div
            key={idx}
            onClick={() => handleSelect(elem)}
            className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start cursor-pointer"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem.description}</h4>
          </div>
        ))
      ) : (
        <div className="p-3 mt-5 font-semibold text-gray-500">
          No suggestions
        </div>
      )}
    </div>
  );
};

export default LocationSearchPanel;
