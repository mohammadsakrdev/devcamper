// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  return res
    .status(200)
    .json({ success: true, message: 'Done Successfully', data: null });
};

// @desc Get single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  return res
    .status(200)
    .json({ success: true, message: 'Done Successfully', data: null });
};

// @desc Create new bootcamp
// @route POST /api/v1/bootcamps/:id
// @access Private
exports.createBootcamp = (req, res, next) => {
  return res
    .status(200)
    .json({ success: true, message: 'Done Successfully', data: null });
};

// @desc Update bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
  return res
    .status(200)
    .json({ success: true, message: 'Done Successfully', data: null });
};

// @desc Delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
  return res
    .status(200)
    .json({ success: true, message: 'Done Successfully', data: null });
};
