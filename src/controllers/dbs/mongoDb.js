import { MongoClient } from 'mongodb'
import dotenv from 'dotenv';
import { ObjectId } from "mongodb";


dotenv.config();
const MONGO_URI = process.env.MONGO_URI


const mongoClient = new MongoClient(MONGO_URI);
let db;

mongoClient.connect().then(() => {
	db = mongoClient.db("DBsportcenter");
});

const objectId = ObjectId;

export {db, objectId}