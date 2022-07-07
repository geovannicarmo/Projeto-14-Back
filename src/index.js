import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import chalk from "chalk"
import routeAuthentication from './routes/routeAuthentication.js'

import userMiddleware from './middleware/userMiddleware.js'

dotenv.config();
const app = express()

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

app.use(routeAuthentication)


app.get('/',  userMiddleware, (req, res)=>{

    const user  = res.locals.idUser;
    console.log(user);

    res.send("foi")

    })
    
    

app.listen(PORT,()=>console.log(chalk.yellow(`Server run in port ${PORT}`)))




