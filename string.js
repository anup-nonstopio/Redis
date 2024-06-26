import client from "./client.js";

async function init() {
    // await client.set("msg:4", "Hey from Node");
    // await client.expire("msg:4", 10);

    const data = await client.get("msg:4")
    console.log("Data ",data);
}

init();