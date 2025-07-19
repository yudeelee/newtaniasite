import mongoose from 'mongoose';

const mainPageSchema = new mongoose.Schema(
  {
    topImg: {
      type: String,
    },
    title: {
      type: String,
    },
    titleen: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    subTitleen: {
      type: String,
    },
    subTitle2: {
      type: String,
    },
    subTitle2en: {
      type: String,
    },
    subTitle3: {
      type: String,
    },
    subTitle3en: {
      type: String,
    },
    slog: {
      type: String,
    },
    slogen: {
      type: String,
    },
    youtubeId: {
      type: String,
    },
    aboutTitle: {
      type: String,
    },
    aboutTitleen: {
      type: String,
    },
    aboutText: {
      type: String,
    },
    aboutTexten: {
      type: String,
    },
    propositionTitle: {
      type: String,
    },
    propositionTitleen: {
      type: String,
    },
    propositionItems: [String],
    propositionItemsen: [String],
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
    fishkien: [
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
    quiqTitleen: {
      type: String,
    },
    quiqText: {
      type: String,
    },
    quiqTexten: {
      type: String,
    },
    button1: {
      type: String
    },
    button1en: {
      type: String
    },
    button2: {
      type: String
    },
    button2en: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);
const MainPage =
  mongoose.models.MainPage || mongoose.model('MainPage', mainPageSchema);

export default MainPage;
