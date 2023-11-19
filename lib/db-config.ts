import { MongoClient } from 'mongodb'

const URL = process.env.MONGO_URI


if (!URL) {
    throw new Error("Mongo URI not found")
}

export const client = new MongoClient(URL)