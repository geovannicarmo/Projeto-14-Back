import { db } from "./dbs/mongoDb.js";
import {paymentsSchema} from  '../schemas/paymentsSchema.js'


export default async function purchaseControllers(req, res){

    try{

    

    const purchase  = req.body
    const idUser=res.locals.idUser

        console.log(purchase)
    const validate = paymentsSchema.validate(purchase.paymentData)
    
    if(validate.error){
        console.log(validate)
      return res.status(422).send(validate.error.details[0].message);
     }
   

    const request = await db.collection("sales").insertOne({purchase, idUser})

    console.log(request)

    res.send("comprado")

}
catch(error){
    console.log(error)
    return res.status(422).send("Erro ao efetuar o cadastro do cartão do usuário")
}
}