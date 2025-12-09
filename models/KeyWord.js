import mongoose from "mongoose";

const KeywordSchema = new mongoose.Schema(
  {
    Keyword: { type: String, required: true },
    Currency: { type: String },
    avgMonthlySearches: { type: Number },
    threeMonthChange: { type: String },
    yoYChange: { type: String },
    Competition: { type: String },
    competitionIndexedValue: { type: Number },
    topOfPageBidLow: { type: Number },
    topOfPageBidHigh: { type: Number },
    adImpressionShare: { type: String },
    organicImpressionShare: { type: String },
    organicAveragePosition: { type: String },
    inAccount: { type: String },
    inPlan: { type: String },
    Searches: [
      {
        month: { type: String, required: true },
        value: { type: Number, required: true },
      },
    ],
    group: String,
    isadvertising: Boolean,
  },
  { timestamps: true }
);

export default mongoose.models.Keyword ||
  mongoose.model("Keyword", KeywordSchema);
