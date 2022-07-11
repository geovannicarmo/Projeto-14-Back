
import { validadeAddesschema } from '../schemas/validadeaddessSchema.js'
import dotenv from 'dotenv'
import { calcularPrecoPrazo } from 'correios-brasil';



dotenv.config();

export async function validateAddressControllers(req, res){





try{  
    const address = req.body
    
    const validate = validadeAddesschema.validate(address)
    
    if(validate.error){
        console.log(validate)
      return res.status(422).send(validate.error.details[0].message);
     }

     console.log(address.cep)

     let args = {
        sCepOrigem: address.cep,
        sCepDestino: '81200100',
        nVlPeso: '1',
        nCdFormato: '1',
        nVlComprimento: '20',
        nVlAltura: '20',
        nVlLargura: '20',
        nCdServico: ['04014', '04510'], //Array com os códigos de serviço
        nVlDiametro: '0',
      };
      
      calcularPrecoPrazo(args).then(response => {

       const PrazosValores={
            prazoEntregaRapida: response[0].PrazoEntrega,
            valorEntregaRapida: response[0].Valor,
            prazoEntregaNormal : response[1].PrazoEntrega,
            valorEntregaNormal : response[1].Valor
           }

           console.log("varrega")

           return res.status(200).send(PrazosValores)

        
      });

}catch(error){
    return res.status(422).send("Erro ao efetuar o cadastro do endereço do usuário")
}
}