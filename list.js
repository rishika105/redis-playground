const client = require("./client")

async function init() {
    await client.lpush("messages", 1)
    const result = await client.blpop("messages", 10) ; //wait for 10 sec if not get any response still
    console.log(result)
}

init();