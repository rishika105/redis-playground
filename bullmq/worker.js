import { Worker } from "bullmq";
import { connection } from "./redis.js";


const worker = new Worker(
  "math-queue",
  async (job) => {
    const { number } = job.data;

    console.log("Processing:", job.id);
    return number * number;
  },
  { connection }
);

worker.on("completed", (job) => {
  console.log(`Job ${job.id} completed with result:`, job.returnvalue);
});

worker.on("failed", (job, err) => {
  console.error(`Job ${job?.id} failed`, err);
});

