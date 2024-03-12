const { generateFormattedCardId } = require('../fonctions/FOR_Carte/formatId.JS')
const { Numero_carte_genere } = require('../fonctions/FOR_Carte/numerogenere')
const Carte=require('../models/Carte')
const User=require('../models/User')


const CreatesimpleCarte= async (req,res,next)=>{
    try{
        const idgenerer=generateFormattedCardId()
        const numgenere=Numero_carte_genere()
     await Carte.create({
         id_carte:idgenerer,
         numero:numgenere, 
    })
    } catch (error) {
        console.log(error)
    }
}


module.exports={
    CreatesimpleCarte,
   
}