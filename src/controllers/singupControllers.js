import bcrypt from 'bcrypt'
import { db } from "./dbs/mongoDb.js";
import {SchemaSingup, SchemaLogin} from '../schemas/authorizationSchema.js'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

export async function postSingup(req, res){
    try{

        const user= req.body;
        
        const validate = SchemaSingup.validate(user)
        
        if (validate.error) {
            return res.status(422).send(validate.error.details[0].message);
        }

        const UserCheck = await db.collection("users").findOne({
            email: user.email
        })

        if(UserCheck){
            return res.status(422).send("Esse e-mail já está registrado")
        }


        const passwordCrypt = bcrypt.hashSync(user.password, 10)

        
        await db.collection('users').insertOne({  
            name: user.name,
            email: user.email,
            password: passwordCrypt 
        })
            return res.status(201).send("Cadastrado com sucesso")
            
        }
        catch (error){
            console.log(error)
            console.log("____________________________________________________________")
            return res.status(422).send("Erro ao cadastrar o usuário")

        }

}

export async function postLogin(req, res){

    try{

        
        const dataLogin = req.body
        
        const validate = SchemaLogin.validate(dataLogin)
        
        if(validate.error){
            res.status(422).send(validate.error.details[0].message);
         }

        const User = await db.collection("users").findOne({
            email: dataLogin.email
        })

        if(!User){
            return res.status(422).send("E-mail ou senha invalidos")
        }
        
        if(!bcrypt.compareSync(dataLogin.password, User.password))
        {
            return res.status(422).send("E-mail ou senha invalidos")
        }
        
        
        const SECRETKEY = process.env.SECRETKEY
        
        
        const dadosJWT = "dados a sif encriptar"
        
        const token = jwt.sign(dadosJWT, SECRETKEY);

        console.log(User._id)

        db.collection('session').insertOne({
             idUser: User._id
        })

        
        

        return res.status(201).send(token)
        
    }catch(error){
        console.log(error)
        return res.status(422).send("Erro ao efetuar o login do usuário")
    }
    } 