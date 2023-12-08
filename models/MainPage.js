import mongoose from 'mongoose';

const mainPageSchema = new mongoose.Schema(
  {
    topImg: {
      type: String,
    },
    title: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    subTitle2: {
      type: String,
    },
    subTitle3: {
      type: String,
    },
    slog: {
      type: String,
    },
    youtubeId: {
      type: String,
    },
    aboutTitle: {
      type: String,
    },
    aboutText: {
      type: String,
    },
    propositionTitle: {
      type: String,
    },
    propositionItems: [String],
    photos: [{ src: { type: String } }],
    fishki: [
      {
        header: {
          type: String,
        },
        body: {
          type: String,
        },
      },
    ],
    services: [
      {
        header: {
          type: String,
        },
        body: {
          type: String,
        },
      },
    ],
    clients: [
      {
        src: {
          type: String,
        },
        link: {
          type: String,
        },
      },
    ],
    quiqTitle: {
      type: String,
    },
    quiqText: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const MainPage =
  mongoose.models.MainPage || mongoose.model('MainPage', mainPageSchema);

export default MainPage;
