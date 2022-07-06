import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors"
import chalk from "chalk"

dotenv.config();
const app = express()

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI


const mongoClient = new MongoClient(MONGO_URI);
let db;

mongoClient.connect().then(() => {
	db = mongoClient.db("meu_lindo_banco");
});

app.post('/teste', (req,res)=>{

    let body=req.body

    db.collection('testes2').insertOne({
        
        body
    }).then(()=>res.send("criado"))

})

app.get('/', (req,res)=>{
    res.send("get")
})


app.listen(PORT,()=>console.log(chalk.yellow(`Server run in port ${PORT}`)))




