const express = require("express");
const router = express.Router();
const mapController = require("../controllers/maps.controller");
const { query } = require("express-validator");
const {
  validateGeocodeParams,
  validateDistanceMatrixParams,
  validateAutoComplete,
} = require("../middlewares/maps.middleware");

// Fixing the route handler names to match the controller
router.get(
  "/geocode",
  query("address").isString().isLength({ min: 3 }),
  validateGeocodeParams,
  mapController.getCoordinates
);

router.get(
  "/distance-matrix",
  query("origin").isString().isLength({ min: 3 }),
  query("destination").isString().isLength({ min: 3 }),
  validateDistanceMatrixParams,
  mapController.getDistanceTime
);

router.get(
  "/autocomplete",
  query("input").isString().isLength({ min: 3 }),
  validateAutoComplete,
  mapController.getAutoCompleteSuggestions
);

module.exports = router;
