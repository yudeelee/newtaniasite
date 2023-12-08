import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema(
  {
    src: String,
  },
  {
    timestamps: true,
  }
);
const Image = mongoose.models.Image || mongoose.model('Image', imageSchema);

export default Image;
