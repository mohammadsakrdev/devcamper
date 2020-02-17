const Bootcamp = require('../models/Bootcamp');

// @desc Create new bootcamp
// @route POST /api/v1/bootcamps/:id
// @access Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    return res
      .status(201)
      .json({ success: true, message: 'Done Successfully', data: bootcamp });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null
    });
  }
};

// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    return res
      .status(200)
      .json({ success: true, message: 'Done Successfully', data: bootcamps });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null
    });
  }
};

// @desc Get single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res
        .status(400)
        .json({ success: false, message: 'Not found', data: null });
    }
    return res
      .status(200)
      .json({ success: true, message: 'Done Successfully', data: bootcamp });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null
    });
  }
};

// @desc Update bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!bootcamp) {
      return res
        .status(400)
        .json({ success: false, message: 'Not found', data: null });
    }
    return res
      .status(200)
      .json({ success: true, message: 'Done Successfully', data: bootcamp });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null
    });
  }
};

// @desc Delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res
        .status(400)
        .json({ success: false, message: 'Not found', data: null });
    }
    return res
      .status(200)
      .json({ success: true, message: 'Deleted Successfully', data: null });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null
    });
  }
};
