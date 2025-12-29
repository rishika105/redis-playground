

import readline from "node:readline";
import { mathQueue } from "./queue.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Type a number and press Enter (type 'exit' to quit)");

rl.on("line", async (input) => {
  if (input.trim() === "exit") {
    console.log("Exiting producer...");
    rl.close();
    process.exit(0);
  }

  const num = Number(input);

  if (isNaN(num)) {
    console.log("❌ Please enter a valid number");
    return;
  }

  await mathQueue.add("square-number", {
    number: num,
  });

  console.log(`✅ Job queued for number: ${num}`);
});
