import { db } from "./dbs/mongoDb.js";

/* export async function insertProduct(req, res) {
  try {
    const products = req.body;
    await db.collection('products').insertMany( products )
    return res.status(201).send("Cadastrado com sucesso.")
  }
  catch (error) {
    console.log(error)
    console.log("____________________________________________________________")
    return res.status(422).send("Erro ao cadastrar os produtos")
  }
} */

export async function getProducts(_, res) {
  try {
    const products = await db.collection('products').find().toArray();
    return res.status(200).send(products)
  }
  catch (error) {
    console.log(error)
    console.log("____________________________________________________________")
    return res.status(422).send("Erro ao listar os produtos")
  }
}
