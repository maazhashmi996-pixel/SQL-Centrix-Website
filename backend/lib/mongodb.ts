import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global._mongooseCache ?? {
  conn: null,
  promise: null,
};

if (!global._mongooseCache) {
  global._mongooseCache = cached;
}

/**
 * Connects to MongoDB using a cached connection so that Next.js hot
 * reloading (dev) and serverless invocations (prod) don't open a new
 * connection on every request.
 *
 * Requires MONGODB_URI to be set in your environment (.env.local).
 */
export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGODB_URI) {
    throw new Error(
      "MONGODB_URI is missing. Add it to your .env.local file, e.g.\nMONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/sql-centrix"
    );
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}
