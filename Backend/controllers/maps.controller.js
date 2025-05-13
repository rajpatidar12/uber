const { validationResult } = require("express-validator");
const mapService = require("../services/maps.service");

module.exports.getGeocode = async (req, res) => {
  try {
    const { address, components } = req.query;

    if (!address && !components) {
      return res
        .status(400)
        .json({ message: "Address or components query param is required" });
    }

    const result = await mapService.geocodeAddress(address, components);

    if (!result.results || result.results.length === 0) {
      return res.status(404).json({ message: "No geocoding results found" });
    }

    const { lat, lng } = result.results[0].geometry.location;

    return res.status(200).json({ latitude: lat, longitude: lng });
  } catch (error) {
    console.error("Error in getGeocode:", error);
    return res
      .status(500)
      .json({ message: "Geocoding failed", error: error.message });
  }
};

module.exports.getDistanceTime = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { origin, destination } = req.query;
    const distanceTime = await mapService.getDistanceTime(origin, destination);

    res.status(200).json(distanceTime);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.getAutoComplete = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { input } = req.query;
    const suggestions = await mapService.getAutoComplete(input);

    res.status(200).json(suggestions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
