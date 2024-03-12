const User = require('../models/User');
const Carte=require('../models/Carte');
const Addcarte = require('../fonctions/FOR_USER/Addcarts');

/////////////////////////////////////////////////////////////////////////
const Creatuserwithcarte = async (req, res, next) => {
    try {
        const { nom, prenom, cin, photo, email, telephone } = req.body;

        const existingUser = await User.findOne({ where: { cin } });
        if (existingUser) {
            console.log('This user already exists');
        }

        const alias_genere = (nom, prenom, cin) => {
            let deuxcharnom = '';
            let deuxcharprenom = '';
            let deuxcharcin = '';
            for (let i = 0; i < nom.length && deuxcharnom.length < 2; i++) {
                deuxcharnom += nom[i];
            }
            for (let k = 0; k < prenom.length && deuxcharprenom.length < 2; k++) {
                deuxcharprenom += prenom[k];
            }
            let strcin = cin.toString();
            for (let j = 0; j < strcin.length && deuxcharcin.length < 2; j++) {
                deuxcharcin += strcin[j];
            }
            return deuxcharnom + deuxcharprenom + deuxcharcin;
        };

        const alias = alias_genere(nom, prenom, cin);
     
         const cartelibre= await Carte.findOne({where:{id_user :null}})
        if(!cartelibre){'aucune carte libre pour le moment'}
        
        
        
        try {
            const newUser = await User.create({
              nom,
              prenom,
              cin,
              alias,
              email,
              telephone,
              photo,
              carte_numero: cartelibre.numero
            });
          
            const updateCartePromise = Carte.update(
              { id_user: newUser.id_user,
                statut,
                date_expiration,
               
            },
              { where: { numero: cartelibre.numero } }
            );
          
           
            await Promise.all([updateCartePromise]);
          
            console.log('User and Carte updated successfully');
          } catch (error) {
            console.error('Error:', error.message);
          }
          
                
                
                
            } catch (error) {
                console.log(error);
            }
        };                
/////////////////////////////////////////////////////////////////////////                
 const Updateuser = async (req, res, next) => {
    try {
        const userId = req.params.id_user; 
        const { nom, prenom, cin, alias, photo, email, telephone } = req.body;
        
        await User.update(
            {
                nom,
                prenom,
                cin,
                alias,
                email,
                telephone,
                photo,
            },
            {
                where: { id_user: userId },
                returning: true,
            }
        );
        return res.status(200).json({ message: 'User updated successfully' });
    
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
////////////////////////////////////////////////////
const ReadOneuser = async (req, res, next) => {
    try {
        const userId = req.params.id_user;

       
        const user = await User.findOne({ where: { id_user: userId } });

        if (user) {
           
            return res.status(200).json({ user });
        } else {
           
            return res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
const ReadAlluser = async (req, res, next) => {
    try {
        
        const users = await User.findAll();

        
        return res.status(200).json({ users });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
///////////////////////////////////////////////////////////

const DeleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id_user; 

       
        const user = await User.findByPk(userId);

        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

       
        await user.destroy();

       
        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
/////////////////////////////////////////////////////////

const Addothercartetouser = async (req, res, next) => {
    try {
        const userId = req.params.id_user;
        await Addcarte(userId);
       
    } catch (error) {
        console.log(error);
    }
};

module.exports={
    Creatuserwithcarte,
    Addothercartetouser,
    Updateuser,
    ReadOneuser,
    ReadAlluser,
    DeleteUser
}