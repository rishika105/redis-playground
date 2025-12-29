import client from "./client.js";

async function init() {
  // await client.set('msg:6', "hey from node.js")
  await client.expire("msg:6", 10); //after 10 sec we will get null
  const result = await client.get("msg:6");
  console.log("Result -> ", result);
}

init();

