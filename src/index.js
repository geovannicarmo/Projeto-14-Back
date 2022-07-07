import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import chalk from "chalk"
import routeAuthentication from './routes/routeAuthentication.js'
import routeProducts from "./routes/reouteProducts.js";

dotenv.config();
const app = express()

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT

app.use(routeAuthentication);
app.use(routeProducts);


app.listen(PORT,()=>console.log(chalk.yellow(`Server run in port ${PORT}`)))




