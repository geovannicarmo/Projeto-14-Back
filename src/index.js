import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import chalk from "chalk"
import routeAuthentication from './routes/routeAuthentication.js'
import routeProducts from "./routes/routeProducts.js";
import routevalidaEndereco from "./routes/routevalidateAddress.js"
import routepurchase from "./routes/routePurchase.js"
import routeCart from "./routes/routeCart.js"

// import {
//     calcularPrecoPrazo,
//     consultarCep,
//     rastrearEncomendas,
//   } from 'correios-brasil';

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


// //   const { consultarCep } = require('correios-brasil');

// // Cep pode ser String ou Number
// const cep = '30870300'; // 21770200 , '21770-200', '21770 200'.... qualquer um formato serve

// consultarCep(cep).then(response => {
//   console.log(response);
// });



// let args = {
//   // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
//   sCepOrigem: '81200100',
//   sCepDestino: '81200100',
//   nVlPeso: '1',
//   nCdFormato: '1',
//   nVlComprimento: '20',
//   nVlAltura: '20',
//   nVlLargura: '20',
//   nCdServico: ['04014', '04510'], //Array com os códigos de serviço
//   nVlDiametro: '0',
// };

// calcularPrecoPrazo(args).then(response => {
//   console.log(response);
// });

    
    

app.listen(PORT,()=>console.log(chalk.yellow(`Server run in port ${PORT}`)))



