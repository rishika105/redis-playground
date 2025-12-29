//run npm run produce
//npm run worker
//npm run server
//sepearting coz of logs issue

import express from "express";
import { createBullBoard } from "@bull-board/api";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { ExpressAdapter } from "@bull-board/express";
import { mathQueue } from "./queue.js";

const app = express();

function setupBullBoard(app) {
    const serverAdapter = new ExpressAdapter();

    serverAdapter.setBasePath("/admin/queues");

    createBullBoard({
        queues: [new BullMQAdapter(mathQueue)],
        serverAdapter,
    });

    app.use("/admin/queues", serverAdapter.getRouter());
}

setupBullBoard(app);

app.get("/", (req, res) => {
    res.send("BullMQ Dashboard Running");
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
    console.log("Bull Board → http://localhost:3000/admin/queues");
});
