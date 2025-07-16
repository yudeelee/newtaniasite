import mongoose from "mongoose";

const aboutPageSchema = new mongoose.Schema(
  {
    workers: [
      {
        name: String,
        nameen: String,
        // nameEn: String,
        position: String,
        positionen: String,
        // positionEn: String,
        photo: String,
        text: String,
        texten: String,
        // textEn: String,
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
  mongoose.models.AboutPage || mongoose.model("AboutPage", aboutPageSchema);

export default AboutPage;
