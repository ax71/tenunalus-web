import mongoose from "mongoose";

let cahced = global.mongoose;

if (!cahced) {
  cahced = global.mongose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cahced.conn) {
    return cahced.conn;
  }

  if (!cahced.promise) {
    const opts = {
      bufferCommands: false,
    };
    cahced.promise = mongoose
      .connect(`${process.env.MONGODB_URI}`, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }
  cahced.conn = await cahced.promise;
  return cahced.conn;
}

export default dbConnect;
