import mongoose from 'mongoose';

const contactPageSchema = new mongoose.Schema(
  {
    phone: String,
    mail: String,
    instagram: String,
    telegram: String,
    youtube: String,
  },
  {
    timestamps: true,
  }
);
const ContactPage =
  mongoose.models.ContactPage ||
  mongoose.model('ContactPage', contactPageSchema);

export default ContactPage;
