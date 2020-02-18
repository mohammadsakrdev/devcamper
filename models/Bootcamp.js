const mongoose = require('mongoose');
const slugify = require('slugify');

const BootcampSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      unique: true,
      trim: true,
      maxlength: [50, 'Name should be less than 50 characters']
    },
    slug: { type: String },
    description: {
      type: String,
      required: true,
      maxlength: [500, 'Description should be less than 500 characters']
    },
    website: {
      type: String,
      match: [
        /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+(-?[a-zA-Z0-9])*\.)+[\w]{2,}(\/\S*)?$/,
        'Please add a valid URL'
      ]
    },
    phoneNumber: {
      type: String,
      maxlength: [20, 'Phone number should be less than 20 characters']
    },
    email: {
      type: String,
      match: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please add a valid Mail'
      ]
    },
    address: {
      type: String,
      required: [true, 'Please add an address']
    },
    location: {
      // GeoJson point
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'] // 'location.type' must be 'Point'
        // required: true
      },
      coordinates: {
        type: [Number],
        // required: true,
        index: '2dsphere'
      },
      formattedAddress: { type: String },
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zipCode: { type: String },
      country: { type: String }
    },
    careers: {
      type: [String],
      required: true,
      enum: [
        'Web Development',
        'Mobile Development',
        'UI/UX',
        'Data Science',
        'Business',
        'Other'
      ]
    },
    averageRate: {
      type: Number,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating can not be more than 5']
    },
    averageCost: {
      type: Number
    },
    photo: { type: String, default: 'no-photo.jpg' },
    housing: { type: Boolean, default: true },
    jobAssistance: { type: Boolean, default: false },
    jobGuarantee: { type: Boolean, default: false },
    acceptGi: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

// create bootcamp slug from a name
BootcampSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});
module.exports = mongoose.model('Bootcamp', BootcampSchema);
