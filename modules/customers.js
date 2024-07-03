require('dotenv').config();
const { v4 } = require('uuid')
const { MongoOprations } = require('../services/mongo/mongo-operations')

const { MONGO_RECEIPT_DB, MONGO_CUSTOMERS_COLLECTION } = process.env;

const mongoOprations = new MongoOprations(MONGO_RECEIPT_DB)

const existCustomer = async (name) => {
    mongoOprations.Collection = MONGO_CUSTOMERS_COLLECTION;
    try {
        const response = await mongoOprations.find({ filter: { name } })
        return response.length > 0;
    }
    catch (error) {
        throw error;
    }
}

const createNewCustomer = async (customer) => {
    const client = await existCustomer(customer.name);
    if (client) {
        const error = {
            message: `the name '${customer.name}' is not available`,
            type: 422
        }
        throw error
    }
    const id = v4();
    customer.id = id;
    try {
        mongoOprations.Collection = MONGO_CUSTOMERS_COLLECTION;
        await mongoOprations.insertItem(customer);
        return customer;
    }
    catch (error) {
        throw error;
    }


}


module.exports = { existCustomer, createNewCustomer }