const { MongoClient } = require('mongodb');

let client = null;

async function openConnection(server) {
    try {
        client = MongoClient(server.trim())
        await client.connect()
    }
    catch (error) {
        throw error;
    }
}

async function closeConnection() {
    await client.close();
}

const getClient = () => client

module.exports={openConnection,getClient,closeConnection}