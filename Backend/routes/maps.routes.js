const express = require("express");
const router = express.Router();
const mapController = require("../controllers/maps.controller");
const { query } = require("express-validator");
const {
  validateGeocodeParams,
  validateDistanceMatrixParams,
  validateAutoComplete,
} = require("../middlewares/maps.middleware");

router.get(
  "/geocode",
  query("address").isString().isLength({ min: 3 }),
  validateGeocodeParams,
  mapController.getGeocode
);

router.get(
  "/distancematrix",
  query("origin").isString().isLength({ min: 3 }),
  query("destination").isString().isLength({ min: 3 }),
  validateDistanceMatrixParams,
  mapController.getDistanceTime
);

router.get(
  "/place/autocomplete",
  query("input").isString().isLength({ min: 3 }),
  validateAutoComplete,
  mapController.getAutoComplete
);

module.exports = router;
