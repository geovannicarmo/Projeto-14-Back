import { db } from "./dbs/mongoDb.js";


export default async function(req, res){

    console.log(res.locals.idUser);

     const idUser=res.locals.idUser


    const deletedSession = await db.collection("session").deleteOne({
        idUser
    })

    console.log(deletedSession)

    res.status(201).send("Usuario deslogado")
}

