const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../configDatabase/database');
const User =require('./User');
const Evenement = require('./Evenement');

const Carte = sequelize.define('Carte', {
  id_carte: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
},
numero :{
  type:Sequelize.STRING,
  unique:true,
  allowNull:false,
},

 
  statut: {
    type: Sequelize.ENUM('active', 'desactive', 'vip', 'blackliste'),
    allowNull: true,
    defaultValue: 'active',
  },
  nombre_max_entree: {
    type: Sequelize.INTEGER,
    allowNull: true,
   
   
  },
  date_expiration: {
    type: Sequelize.DATE,
    allowNull:true,
    
  },
  nom_timezone :{
    type:Sequelize.STRING
  }
});

Carte.hasOne(Evenement,{
  foreignKey:'id_carte'
})


module.exports = Carte;
