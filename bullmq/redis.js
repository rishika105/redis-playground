import IORedis from "ioredis";
import dotenv from "dotenv";
dotenv.config();

export const connection = new IORedis(process.env.VALKEY_URL, {
  maxRetriesPerRequest: null, // IMPORTANT for BullMQ
});

