import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    category: String,
    item: String,
    price: String,
    comment: String,
    userId: String,
    managerId: String,
    status: String,
    managerComment: String,
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
