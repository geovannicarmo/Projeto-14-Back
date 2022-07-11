import { db, objectId } from "../controllers/dbs/mongoDb.js";
import jwt from 'jsonwebtoken';


export default async function userMiddleware(req, res, next){

    const { authorization } = req.headers;

    const token = authorization?.replace('Bearer ', '').trim();


    if (!token) return res.status(401).send('Token invalido ou expirado(n recebido).');

    const SECRETKEY = process.env.SECRETKEY;


        try {
            const dados = jwt.verify(token, SECRETKEY);
           
            
            const thereIsSession = await db.collection("session").findOne({
                _id: new objectId(dados)
            })

            if (!thereIsSession) return res.status(401).send('Token invalido ou expirado.');

            const idUser = thereIsSession.idUser
            

            res.locals.idUser = idUser;
            next();

        } catch (error){
            console.log(error)
            return res.status(401).send('Token invalido ou expirado.');
        }

}