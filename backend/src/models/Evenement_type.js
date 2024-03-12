const { DataTypes } = require('sequelize')
const sequelize=require('../configDatabase/database')
const Evenement = require('./Evenement')

const EvenementType=sequelize.define('EvenementType',{
    id_typeevent:{
        primaryKey:true,
        type:DataTypes.SMALLINT,
        autoIncrement:true
    },
    notification:{
        type:DataTypes.ENUM('WARNING','ERROR','INFORMATION','DANGER')
    },
    porte_statut:{
        type: DataTypes.ENUM('Ouvert','FERMER')
    }
})
EvenementType.hasMany(Evenement,{
          foreignKey:'id_typeevent',
          as :'events'
    }
)
module.exports=EvenementType