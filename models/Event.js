import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    userId: String,
    orderId: String,
    type: String,
    description: String,
  },
  {
    timestamps: true,
  }
);
const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);

export default Event;
