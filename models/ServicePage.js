import mongoose from "mongoose";

const servicePageSchema = new mongoose.Schema(
  {
    services: [
      {
        name: String,
        nameen: String,
        description: String,
        descriptionen: String,
        text: String,
        texten: String,
        textMore: String,
        textMoreen: String,
        slogId: String,
        category: String,
        items: [
          {
            name: String,
            nameen: String,
            from: Boolean,
            price: Number,
            nominal: String,
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);
const ServicePage =
  mongoose.models.ServicePage ||
  mongoose.model("ServicePage", servicePageSchema);

export default ServicePage;
