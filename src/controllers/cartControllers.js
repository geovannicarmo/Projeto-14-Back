import { db, objectId } from "./dbs/mongoDb.js";

export async function getCart(req, res) {
  const { idUser } = res.locals;
  console.log()

  try {
    const cart = await db.collection('cartsProducts').find({idUser: new objectId(idUser)}).toArray();
    return res.status(200).send(cart);
  }

  catch (error) {
    console.log(error)
    console.log("____________________________________________________________")
    return res.status(500).send("Erro ao procurar o produto selecionado")
  }
}

export async function addToCart(req, res) {
  const { idUser } = res.locals;
  const product = {
    ...req.body,
    idUser: new objectId(idUser)
  };

  console.log(product);

  try {
    await db.collection('cartsProducts').insertOne(product);
    return res.status(201).send("Acicionado com sucesso!");
  }

  catch (error) {
    console.log(error)
    console.log("____________________________________________________________")
    return res.status(500).send("Erro ao procurar o produto selecionado")
  }
}

export async function deleteFromCart(req, res) {
  const { idUser } = res.locals;
  const {productId} = req.params;

  try {
    await db.collection('cartsProducts').deleteOne({_id: new objectId(productId)});
    const cartUpdated = await db.collection('cartsProducts').find({idUser: new objectId(idUser)}).toArray();
    return res.status(200).send(cartUpdated);
  }

  catch (error) {
    console.log(error)
    console.log("____________________________________________________________")
    return res.status(500).send("Erro ao tentar remover o produto selecionado")
  }
}