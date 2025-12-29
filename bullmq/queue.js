import { Queue } from "bullmq";
import { connection } from "./redis.js";

export const mathQueue = new Queue("math-queue", { connection });