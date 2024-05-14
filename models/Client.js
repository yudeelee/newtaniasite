import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    mail: String,
    birthday: String,
    organization: String,
    comment: String,
  },
  {
    timestamps: true,
  }
);
const Client = mongoose.models.Client || mongoose.model('Client', clientSchema);

export default Client;
