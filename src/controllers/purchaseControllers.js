import joi from "joi";
import { db } from "./dbs/mongoDb.js";


export default async function purchaseControllers(req, res){

    const purchase  = req.body
    console.log(purchase)

    const request = await db.collection("sales").insertOne(purchase)

    console.log(request)

    res.send("comprado")

}