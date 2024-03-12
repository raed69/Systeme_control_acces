const Numero_carte_genere = () => {
   
    const randomNumber = Math.floor(Math.random() * 900) + 100;
  
    
    return randomNumber.toString();
  };
  module.exports={Numero_carte_genere}