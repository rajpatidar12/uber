// Geocode param validation
function validateGeocodeParams(req, res, next) {
  const { address, components } = req.query;

  if (!address && !components) {
    return res.status(400).json({
      error: 'At least one of "address" or "components" parameter is required.',
    });
  }

  next();
}

// Distance matrix param validation
function validateDistanceMatrixParams(req, res, next) {
  const { origin, destination } = req.query;

  if (!origin || !destination) {
    return res.status(400).json({
      error: '"origin" and "destination" query parameters are both required.',
    });
  }

  next();
}

// Autocomplete param validation
function validateAutoComplete(req, res, next) {
  const { input } = req.query;

  if (!input || input.trim().length < 3) {
    return res.status(400).json({
      error:
        '"input" query parameter is required and must be at least 3 characters long.',
    });
  }

  next();
}

module.exports = {
  validateGeocodeParams,
  validateDistanceMatrixParams,
  validateAutoComplete,
};
