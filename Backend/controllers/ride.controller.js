const rideService = require("../services/ride.service");
const { validationResult } = require("express-validator");
const mapService = require("../services/maps.service");
const { sendMessageToSocketId } = require("../socket");

module.exports.createRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { pickup, destination, vehicleType } = req.body;

  try {
    // Create ride
    const ride = await rideService.createRide({
      user: req.user._id,
      pickup,
      destination,
      vehicleType,
    });

    // Send response immediately
    res.status(201).json(ride);

    // Background task: Notify nearby captains
    (async () => {
      try {
        const pickupCoordinates = await mapService.geocodeAddress(pickup);

        const { lat, lng } =
          pickupCoordinates.results[0]?.geometry?.location || {};
        if (typeof lat !== "number" || typeof lng !== "number") {
          console.error(
            "Invalid coordinates returned from geocoding:",
            pickupCoordinates
          );
          return;
        }

        const captainsInRadius = await mapService.getCaptainsInTheRadius(
          lat,
          lng,
          2
        );

        if (!Array.isArray(captainsInRadius)) {
          console.error(
            "Expected array of captains but got:",
            captainsInRadius
          );
          return;
        }

        const rideData = ride.toObject ? ride.toObject() : ride;
        rideData.otp = ""; // Optional mutation for socket payload

        for (const captain of captainsInRadius) {
          if (captain.socketId) {
            console.log(
              `Sending ride to captain ${captain._id} at socket ${captain.socketId}`
            );
            sendMessageToSocketId(captain.socketId, {
              event: "new-ride",
              data: rideData,
            });
          } else {
            console.warn(`Captain ${captain._id} has no socketId`);
          }
        }
      } catch (innerErr) {
        console.error(
          "Background task failed (geocode or socket notify):",
          innerErr
        );
      }
    })();
  } catch (err) {
    console.error("Ride creation failed:", err);
    return res.status(400).json({ message: err.message });
  }
};

module.exports.getFare = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { pickup, destination } = req.query;

  try {
    const fare = await rideService.getFare(pickup, destination);
    return res.status(200).json(fare);
  } catch (err) {
    console.error("Fare calculation failed:", err);
    return res.status(500).json({ message: err.message });
  }
};
