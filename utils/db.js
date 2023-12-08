import mongoose from 'mongoose';

const connection = {};

const connectDb = async () => {
  if (connection.isConnected) {
    console.log('Database is already connected');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('Use previous connection to the database');
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
  console.log('New connection to the database');
  connection.isConnected = db.connections[0].readyState;
};

const disconnectDb = async () => {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('Not disconnection from database');
    }
  }
};

const db = { connectDb, disconnectDb };
export default db;
