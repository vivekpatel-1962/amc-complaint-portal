const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      required: true,
      validate: {
        validator: function(v) {
          return v.length === 2 && 
                 v[0] >= -180 && v[0] <= 180 && 
                 v[1] >= -90 && v[1] <= 90;
        },
        message: 'Invalid coordinates'
      }
    }
  },
  category: {
    type: String,
    required: true,
    enum: ['Roads', 'Sanitation', 'Water', 'Health'],
    index: true
  },
  status: {
    type: String,
    enum: ['Submitted', 'Verified', 'Assigned', 'In Progress', 'Resolved', 'Closed'],
    default: 'Submitted',
    index: true
  },
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  images: [{
    url: {
      type: String,
      required: true
    },
    caption: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  ward: {
    type: String,
    required: true,
    index: true
  },
  zone: {
    type: String,
    required: true,
    index: true
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High', 'Urgent'],
    default: 'Medium'
  },
  expectedResolutionDate: {
    type: Date
  },
  resolvedAt: {
    type: Date
  },
  resolutionSummary: {
    type: String,
    maxlength: [500, 'Resolution summary cannot be more than 500 characters']
  }
}, {
  timestamps: true
});

// Create a 2dsphere index for location-based queries
complaintSchema.index({ location: '2dsphere' });

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint; 
