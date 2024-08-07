import mongoose from "mongoose";

const servicePageSchema = new mongoose.Schema(
  {
    services: [
      {
        name: String,
        description: String,
        text: String,
        textMore: String,
        slogId: String,
        category: String,
        items: [
          {
            name: String,
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
