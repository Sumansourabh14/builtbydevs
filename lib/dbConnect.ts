import mongoose from "mongoose";

type ConnectionProps = {
  isConnected?: number;
};

const connection: ConnectionProps = {};

async function connectDb(): Promise<void> {
  if (connection.isConnected) {
    console.log(`Already connected to db`);
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI || "");
    connection.isConnected = db.connections[0].readyState;
    console.log(`DB connected successfully`);
  } catch (error) {
    console.log(`DB connection failed!`, error);
    process.exit(1);
  }
}

export default connectDb;
