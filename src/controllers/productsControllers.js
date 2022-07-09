import { db, objectId } from "./dbs/mongoDb.js";

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

export async function getProducts(req, res) {
  try {
    const skip = req.headers.value*12

    const products = await db.collection('products').find().sort().skip(skip).limit(0).toArray();

    if(products.length===0){
      return res.status(200).send("Todos os produtos foram carregados")
    }

    return res.status(200).send(products)

  }
  catch (error) {
    console.log(error)
    console.log("____________________________________________________________")
    return res.status(422).send("Erro ao listar os produtos")
  }
}

export async function getProduct(req, res) {
  const { productId } = req.params;
  try {
    const product = await db.collection('products').find({_id: new objectId(productId)}).toArray();
    return res.status(200).send(product);
  }
  catch (error) {
    console.log(error)
    console.log("____________________________________________________________")
    return res.status(422).send("Erro ao procurar o produto selecionado")
  }
}
