import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
  {
    name: String,
    title: String,
    description: String,
    body: [mongoose.Schema.Types.Mixed],
  },
  {
    timestamps: true,
  }
);
const Group = mongoose.models.Group || mongoose.model("Group", groupSchema);

export default Group;
