import mongoose from 'mongoose';

const aboutPageSchema = new mongoose.Schema(
  {
    workers: [
      {
        name: String,
        position: String,
        photo: String,
        text: String,
        unvisible: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
const AboutPage =
  mongoose.models.AboutPage || mongoose.model('AboutPage', aboutPageSchema);

export default AboutPage;
