import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import chalk from "chalk"
import routeAuthentication from './routes/routeAuthentication.js'
import routeProducts from "./routes/routeProducts.js";
import routevalidaEndereco from "./routes/routevalidateAddress.js"
import routepurchase from "./routes/routePurchase.js"
import routeCart from "./routes/routeCart.js"



dotenv.config();
const app = express()

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT

app.use(routeAuthentication);
app.use(routeProducts);
app.use(routevalidaEndereco);
app.use(routepurchase);
app.use(routeCart);




    
    

app.listen(PORT,()=>console.log(chalk.yellow(`Server run in port ${PORT}`)))



