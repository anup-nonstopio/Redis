import client from "./client.js";

async function init() {
    await client.lpush("list", "Node");
    await client.lpush("list", "Redis");
    await client.lpush("list", "Express");
    await client.lpush("list", "MongoDB");

    const data = await client.brpop("list",30);
    console.log("Data->", data);
}

init();